//Uvoz biblioteke Express koja se koristi za upravljanje rutama i zahtevima
import express from 'express';
//funkcije iz kontrolera
import { createConcert,deleteConcert,getAllConcerts,getConcertDetails,updateConcert } from '../controllers/concert.controller.js';

//Kreiranje novog router objekta koji se koristi za definisanje novih ruta
const router = express.Router();

router.route('/').get(getAllConcerts);

router.route('/:id').get(getConcertDetails);

router.route('/').post(createConcert);

//za azuriranje samo odredjenih delova
router.route('/:id').patch(updateConcert);

router.route('/:id').delete(deleteConcert);

export default router;

