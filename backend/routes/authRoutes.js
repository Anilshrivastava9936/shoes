import express from "express";
// import argon2 from "argon2";  // ✅ Import Argon2
import jwt from "jsonwebtoken";
import User from "../models/auth.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs"

dotenv.config();
const router = express.Router();

router.post("/sighup", async (req, res) => {
    try {
      const { firstName , lastName, email, password, mobile } = req.body;
  
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ message: "User already exists" });
  
      // Debug: Check if password is being received
      console.log("Received Password1:", password);
  
      // Hash password
      // const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, 10);
  
      console.log("Hashed Password1:", hashedPassword);
  
      const newUser = new User({ firstName,lastName, email, password: hashedPassword, mobile });
      console.log("newUser",newUser)
      await newUser.save();
  
      res.status(201).json({message: "User created successfully" });
      // res.status(201).json({ newUser,message: "User created successfully" });
    } catch (error) {
      console.error("Signup Error:", error);
      res.status(500).json({ message: "Server error" });
    }
  });
  


  router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: "Email not registered" });
  
      console.log("Received Password:1", password);
      console.log("Stored Hashed Password:", user.password);
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      console.log("Hashed Password:1", hashedPassword);
  
  
      // Compare password
      const isPasswordValid = await bcrypt.compare(password, user.password);

      // const isMatch = await bcrypt.compare(password, user.password);
      // console.log("Password Match Result:", isMatch);
  
      if (!isPasswordValid) return res.status(400).json({ message: "Invalid password" });
      console.log("password-ram",isPasswordValid)

  
      // Generate JWT
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "48h" });
  
      res.json({ token, user: { id: user._id, name: user.name, email: user.email, mobile: user.mobile } });
    } catch (error) {
      console.error("Login Error:", error);
      res.status(500).json({ message: "Server error" });
    }
  });
  
  


export default router;

