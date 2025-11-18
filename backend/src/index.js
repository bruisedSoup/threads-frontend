import "dotenv/config.js";
import express from 'express';
import { connectDB } from './lib/db.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));

// Body parsers to populate `req.body`
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  connectDB();
});