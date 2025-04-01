import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import notesRoutes from './routes/notesRoutes.js';


dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.use('/api', notesRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDv connected');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => console.log('MongoDB connection error', err)
);



