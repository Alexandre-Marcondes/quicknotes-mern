import express from 'express';
import {
    fetchNotes,
    addNote,

 } from '../controllers/notesController.js';

const router = express.Router();

router.get('/notes', fetchNotes);
router.post('/notes', addNote);

export default router;
