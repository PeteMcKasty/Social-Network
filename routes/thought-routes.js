const express = require('express');
const thoughtController = require('../controllers/thought-controller');

const router = express.Router();

router.post('/thoughts', thoughtController.createThought);

module.exports = router;