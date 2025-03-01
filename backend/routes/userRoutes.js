import express from "express";
import User from "../models/auth.js"; // Ensure `.js` extension is included

const router = express.Router();

router.post("/add", async (req, res) => {
    try {
        const { name, email, password, mobile } = req.body;

        if (!name || !email || !password || !mobile) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" });
        }

        const newUser = new User({ name, email, password, mobile });
        await newUser.save();

        res.status(201).json({ message: "User created successfully!", user: newUser });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


export default router; // ✅ Use `export default`
