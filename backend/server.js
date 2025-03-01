import express from "express";
import cors from "cors"; // ✅ Import CORS middleware
import mongoose from "mongoose";
import dotenv from "dotenv";
// import userRoutes from "./routes/userRoutes.js";
// import authRoutes from "./routes/authRoutes.js";
import authRoutes from './routes/authRoutes.js'
import productRoutes from "./routes/productRoutes.js";

import productOverview from "./routes/productOverview.js";

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

// ✅ Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import mongoose from "mongoose";
// import userRoutes from "./routes/userRoutes.js"; // Ensure `.js` extension is included

// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// app.use("/users", userRoutes);


// // ✅ MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB Connected Anil"))
//   .catch((err) => console.error(err));

// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
