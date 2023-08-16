// models/Thought.js
const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    trim: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;