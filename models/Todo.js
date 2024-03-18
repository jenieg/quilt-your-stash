const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  designer: {
    type: String,
  },
  manufacturer: {
    type: String,
  },
  fabrictype: {
    type: String,
  },
  color: {
    type: String,
  },
  amount: {
    type: String,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
