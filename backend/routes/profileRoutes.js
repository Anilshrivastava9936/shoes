import express from 'express';
import User from '../../backend/models/auth.js';

const router = express.Router();

router.get('/profile/:_id', async (req, res) => {
    const { _id } = req.params;

    try {
        const user = await User.findById(_id);
        if (!user) return res.status(404).json({ message: 'User data not found' });
        res.json(user);
    } catch (error) {
        console.error(error); // Optional: for better debugging
        res.status(500).json({ message: 'Error fetching user profile data' });
    }
});

export default router;


