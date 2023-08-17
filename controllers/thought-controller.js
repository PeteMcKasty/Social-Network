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

// Controller function to create a new reaction for a thought
const createReaction = async (req, res) => {
    try {
      const newReaction = await Reaction.create(req.body);
      const updatedThought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $push: { reactions: newReaction } },
        { new: true }
      );
      res.json(updatedThought);
    } catch (error) {
      res.status(400).json(error);
    }
  };
  
  // Controller function to delete a reaction from a thought
  const deleteReaction = async (req, res) => {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      );
      res.json(updatedThought);
    } catch (error) {
      res.status(400).json(error);
    }
  };
  
  module.exports = {
    createThought,
    updateThought,
    deleteThought,
    getAllThoughts,
    getThoughtById,
    createReaction,
    deleteReaction,
  };