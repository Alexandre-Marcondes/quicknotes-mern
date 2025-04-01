import express from 'express';
import { fetchNotes } from '../controllers/notesController.js';

const router = express.Router();

router.get('/notes', fetchNotes);

export default router;
