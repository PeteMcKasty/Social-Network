const express = require('express');
const {
  createThought,
  updateThought,
  deleteThought,
  getAllThoughts,
  getThoughtById,
  createReaction,
  deleteReaction,
} = require('../controllers/thought-controller');

const router = express.Router();

router.get('/thoughts', getAllThoughts);
router.get('/thoughts/:thoughtId', getThoughtById);
router.post('/thoughts', createThought);
router.put('/thoughts/:thoughtId', updateThought);
router.delete('/thoughts/:thoughtId', deleteThought);
router.post('/thoughts/:thoughtId/reactions', createReaction);
router.delete('/thoughts/:thoughtId/reactions/:reactionId', deleteReaction);

module.exports = router;