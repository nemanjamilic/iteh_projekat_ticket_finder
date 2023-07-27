import mongoose from 'mongoose';
//modeli koji su potrebni
import Concert from '../mongodb/models/concert.js';
import User from '../mongodb/models/user.js';

import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';

//biblioteka dotenv učitava .env fajl
dotenv.config();

//loudinary.config() koja prihvata tri parametra  Ovi parametri se prosleđuju iz .env fajla preko process.env,
//aplikacija može da koristi Cloudinary API za preuzimanje, otpremanje i manipulisanje slikama
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})



const getAllConcerts = async (req, res) => {
    //parametri za filtriranje podataka,ograničavanje broja povratnih podataka i sortiranje podataka
    const { _end, _order, _start, _sort, title_like = "", concertType = ""} = req.query;

    //kasnije se koristi za definisanje različitih parametara za pretraživanje baze podataka
    const query = {};

    //proverava se "concertType" iz zahteva i ako je definisan, dodaje se u "query" objekat kao parametar
    if(concertType !== ""){
        query.concertType = concertType;
    }

    // Pronađeni koncerti se dodaju u "query" objekat
    if(title_like){
        query.title = {$regex: title_like, $options: 'i' };
    }

    try {
        //countDocuments funkcija da bi se izbrojao broj pronađenih koncerata pre slanja upita bazi podataka
        const count = await Concert.countDocuments({query});

        //vracaju se koncerti na osnovu zahteva,ogranicenje broja rezultata i da li ima preskakanje, i sortiranje
        const concerts = await Concert
            .find(query)
            .limit(_end)
            .skip(_start)
            .sort({[_sort]: _order})

        // uključuje se informacija o ukupnom broju pronađenih koncerata
        res.header('x-total-count', count);
        res.header('Access-Control-Expose-Headers', 'x-total-count');
        //sve pronađene koncerti se šalju kao JSON odgovor klijentskoj aplikaciji.
        res.status(200).json(concerts);
    } catch (error) {
        res.status(500).json({message:error.message}) 
    }
};

const getConcertDetails = async (req, res) => {
    //iz parametara zahteva se izdvaja id
    const { id } = req.params;
    //da se nadje taj koncert sa tim id-em
    const concertExists = await Concert.findOne({
        _id: id
    }).populate('creator',); //da se prikaze i kreator koncerta

    //salje odgovor sa detaljima koncerta
    if(concertExists) { res.status(200).json(concertExists) 
    }else{
        res.status(404).json({ message: 'Concert not found'});
    }
};

const createConcert = async (req, res) => {

    try {
        //req.body sadrži parametre za kreiranje koncerta koje je korisnik poslao preko HTTP zahteva.
        const {title, description, concertType, location, price, photo, email} = req.body;

    //zapocinje se nova transakcija u bazi podataka
    const session = await mongoose.startSession();
    session.startTransaction();

    //pronađe korisnika na osnovu njihove adrese e-pošte
    const user = await User.findOne({ email }).session(session);

    if(!user) throw new Error('User not found');

    //servis da bi se slika koncerta postavila na mrežu i dobila javni URL.
    const photoUrl = await cloudinary.uploader.upload(photo);

    //novu instanca Concert modela, koja se zatim dodaje u bazu podataka. 
    const newConcert = await Concert.create({
        title,
        description,
        concertType,
        location,
        price,
        photo: photoUrl.url,
        creator: user._id
    });
    // ID nove koncerta u listu svih koncerata korisnika. Zatim se ovo ažuriranje čuva u bazi podataka.
    user.allConcerts.push(newConcert._id);
    await user.save({ session });

    //izvrsava transakciju, promene tokom transakcije se potvrđuju.
    await session.commitTransaction();

    res.status(200).json({ message: 'Concert created succesfully'}) 

    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
   

};
//editovanje koncerta
const updateConcert = async (req, res) => {
    try {
        //koji se menja
        const {id} = req.params;
        //req.body sadrži parametre za kreiranje koncerta koje je korisnik poslao preko HTTP zahteva.
        const {title, description, concertType, location, price, photo} = req.body;

        const photoUrl = await cloudinary.uploader.upload(photo);

        await Concert.findByIdAndUpdate({_id: id}, {
            title,
            description,
            concertType,
            location,
            price,
            photo: photoUrl.url || photo

        })

        res.status(200).json({message: 'Concert updated successfully'})

    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
};


//brisanje koncerta
const deleteConcert = async (req, res) => {
    try {
        //koji koncert se brise
        const { id } = req.params;

        //koristi za pronalaženje koncerta u bazi
        const concertToDelete = await Concert.findById({
            _id: id
        }).populate('creator'); //učitali podaci korisnika koji je kreirao koncert

        if(!concertToDelete) throw new Error('Concert not found'); //ako ne postoji

        //zapocinje se nova transakcija u bazi podataka
        const session = await mongoose.startSession();
        session.startTransaction();

        //Uklanjanje koncerta iz baze podataka koristeći remove funkciju 
        concertToDelete.remove({session});
        //uklanja referenca na koncert kod korisnika sa pull funkcijom
        concertToDelete.creator.allConcerts.pull(concertToDelete);

        //Ažuriranje korisničkog objekta u bazi podataka kako bi se uklonila referenca
        await concertToDelete.creator.save({session});
        await session.commitTransaction();

        res.status(200).json({message: 'Concert deleted successfully'});

    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

export {
    getAllConcerts,
    getConcertDetails,
    createConcert,
    updateConcert,
    deleteConcert,
}