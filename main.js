import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './models/User.js';
import { calculateClickResults } from './jobs/clickLogic.js';
import connectDatabase from './config/mongodb.js';

const app = express();
app.use(express.json());
app.use(cors());
connectDatabase();

// Here are the project parameters
app.get('/user', async (req, res) => {
  try {
    let user = await User.findOne();
    if (!user) user = await User.create({});
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/click', async (req, res) => {
  try {
    const { points, gotPrize } = calculateClickResults();
    const update = { 
      $inc: { 
        totalScore: points,
        prizesWon: gotPrize ? 1 : 0 
      } 
    };
    
    const user = await User.findOneAndUpdate({}, update, { new: true });
    res.json({ points, gotPrize, user });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  } 
});

app.post('/reset', async (req, res) => {
    try {
      const update = { 
        $set: {  // Use $set instead of $inc to reset values
          totalScore: 0,
          prizesWon: 0
        } 
      };
      
      const user = await User.findOneAndUpdate({}, update, { new: true });
      res.json({ user });  // Return the updated user object
    } catch (error) {
      res.status(500).json({ error: 'Server error' }); 
    } 
  });


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));