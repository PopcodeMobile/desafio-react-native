const mongoose = require('mongoose');

/* abstração da tabela no banco de dados */
const Todo = new mongoose.Schema({
  text: String,
  label: String,
  date: String,
  complete: Boolean,
}, {
  timestamps: true,
});

module.exports = mongoose.model('todo', Todo);
