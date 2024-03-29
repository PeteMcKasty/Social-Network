const express = require('express');
const {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUserById,
  addFriend,
  removeFriend,
} = require('../controllers/user-controller');

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:userId', getUserById);
router.post('/users', createUser);
router.put('/users/:userId', updateUser);
router.delete('/users/:userId', deleteUser);
router.post('/users/:userId/friends/:friendId', addFriend);
router.delete('/users/:userId/friends/:friendId', removeFriend);

module.exports = router;