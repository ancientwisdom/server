const mongoose = require('mongoose');

const poetry = new mongoose.Schema({
  title: { type: String, required: true },
  chapter: { type: String, required: true },
  section: { type: String, required: true },
  content: {
    type: String,
    required: true
  }
});

const Poetry = mongoose.model('Poetry', poetry, 'shijing');

module.exports = Poetry;
