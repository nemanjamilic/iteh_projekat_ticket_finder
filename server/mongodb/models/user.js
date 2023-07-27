//biblioteka za rad s MongoDB bazom podataka u Node.js okruženju
import mongoose from 'mongoose';


//definicija seme
const UserSchema = new mongoose.Schema({
    name: { type:String, required:true },
    email: {type:String, required:true },
    avatar: {type:String, required:true },
    //referenca na model "Concert", što znači da je povezano s drugim modelom "Concert"
    allConcerts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Concert'}],

});

//Mongoose model za "User" koji se temelji na prethodno definisanoj semi
const userModel = mongoose.model('User', UserSchema);

export default userModel;