// Require Mongoose
const mongoose = require('mongoose')
const { Schema } = mongoose

// Schema
const bookSchema = new Schema({
  title: String,
  description: String,
  year: Number,
  quantity: Number,
  imageURL: String
})

// Model and export
const Book = mongoose.model('Book', bookSchema)
module.exports = Book