const User = require('../models/User');

// Controller function to create a new user
const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Controller function to add a new friend to a user's friend list
const addFriend = async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json(error);
    }
  };
  
  // Controller function to remove a friend from a user's friend list
  const removeFriend = async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json(error);
    }
  };
  
  module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getUserById,
    addFriend,
    removeFriend,
  };