import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// Route imports
import authRoutes from './routes/authRoutes.js';
import systemRoutes from './routes/systemRoutes.js';
import installationRoutes from './routes/installationRoutes.js';

// Middleware
import errorHandler from './middleware/errorHandler.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/system', systemRoutes);
app.use('/api/installations', installationRoutes);

// Error handler
app.use(errorHandler);

// MongoDB connection + server start
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Atlas connected successfully');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
  });
