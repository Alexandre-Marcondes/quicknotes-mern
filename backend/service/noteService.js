import Note from '../models/Note.js';

export const getAllNotes = async () => {
    return await Note.find().sort({createdAt: -1});
}

export const addsNote = async (data) => {
    try {
      const { title, body } = data;
      const note = new Note({ title, body });
      return await note.save();
    } catch (err) {
      console.error('Error in addsNote service:', err);
      throw err;
    }
  };
