import { 
    getAllNotes,
    addsNote,
 } from '../service/noteService.js';

export const fetchNotes = async (
    req,
    res, 
) => {
    try {
        const notes = await getAllNotes();
        console.log('SAVED NOTE:', notes); // 👈 Add this
        res.status(200).json(notes);
    }catch (err) {
        console.error('Error in fetchNotes:', err); // 👈 Add this line
        res.status(500).json({error: 'Failed to fetch notes'});
    }
}

export const addNote = async (
    req,
    res,
) => {
    try {
        console.log(req.body);
        const note = await addsNote(req.body);
        res.status(200).json(note);

    } catch (err) {
        res.status(500).json({error: 'failed to add notes to MongoDb'});
    }
}