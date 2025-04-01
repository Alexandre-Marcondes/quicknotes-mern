import { getAllNotes } from '../service/noteService.js';

export const fetchNotes = async (
    req,
    res, 
) => {
    try {
        const notes = await getAllNotes();
        res.status(200).json(notes);
    }catch (err) {
        res.status(500).json({error: 'Failed to fetch notes'});
    }
}