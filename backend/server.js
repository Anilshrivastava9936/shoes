import express from "express";
import cors from "cors"; // ✅ Import CORS middleware
import mongoose from "mongoose";
import dotenv from "dotenv";
// import userRoutes from "./routes/userRoutes.js";
// import authRoutes from "./routes/authRoutes.js";
import authRoutes from './routes/authRoutes.js'
import productRoutes from "./routes/productRoutes.js";

import productOverview from "./routes/productOverview.js";
import profileRoutes from "./routes/profileRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

// ✅ Enable CORS for all origins (Adjust as needed)
app.use(
    cors({
        origin: "http://localhost:5173", // ✅ Allow requests from React frontend
        credentials: true,
    })
);

// ✅ Routes
// app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use('/api', productRoutes);
app.use('/api', productOverview);
app.use('/api', profileRoutes);

// ✅ Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






