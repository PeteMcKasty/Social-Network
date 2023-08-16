const Thought = require('../models/Thought');

// Controller function to create a new thought
const createThought = async (req, res) => {
  try {
    const newThought = await Thought.create(req.body);
    res.json(newThought);
  } catch (error) {
    res.status(400).json(error);
  }
};