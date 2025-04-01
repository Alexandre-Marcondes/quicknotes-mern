import Note from '../models/Note.js';

export const getAllNotes = async () => {
    return await Note.find().sort({createdAt: -1});
}