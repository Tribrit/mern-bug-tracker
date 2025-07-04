import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bugRoutes from './routes/bugRoutes.js';
import errorHandler from './middleware/errorMiddleware.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/bugs', bugRoutes);
app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
  .catch(err => console.log(err));
