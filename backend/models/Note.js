import mongoose, { Schema } from 'mongoose';

const noteSchema = new mongoose.Schema({
    titlle: {
        type: String, 
        required: true,
    },
    body: {
        type: String,
        required: true 
    },
    createdAt: {
        type: Date,
        default: Date.now, 
    },
});

export default mongoose.model('Note', noteSchema);