const express = require('express')
const router = express.Router()
const Book = require('../models/book.js')
const book_seed = require('../models/book_seed.js')

// INDEX
router.get('/', async (req, res) => {
  try {
    let books = await Book.find()
    res.status(200).json(books)
  } catch(e) {
    res.status(404).json({
      message: 'You done messed up A-A-ron.'
    })
  }
})

// SEED
router.get('/seed', async (req, res) => {
  try {
    await Book.insertMany(book_seed)
    res.status(200).json({
        message: 'Seed successful'
    })
  } catch(e) {
    res.status(400).json({
        message: 'Seed unsuccessful'
    })
  }
})

// SHOW
router.get('/:id', async (req, res) => {
  try {
    let book = await Book.findById(req.params.id)
    res.status(200).json(book)
  } catch(e) {
    res.status(404).json({
      message: 'Good luck finding that id...'
    })
  }
})

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    await Book.findByIdAndUpdate(req.params.id, req.body, { 
      new: true
    })
    res.status(200).json(book)
  } catch(e) {
    res.status(400).json({
      message: 'I am sure that e can be used to show you how you really messed up here.',
      e_value: e
    })
  }
})

// CREATE
router.post('/', async (req, res) => {
  try {
    let book = await Book.create(req.body)
    res.status(201).json(book)
  } catch(e) {
    res.status(400).json({
      message: 'Not sure what you did here. Maybe try it again a few more times without changing anything?'
    })
  }
})

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    let book = await Book.findByIdAndDelete(req.params.id)
    res.status().json(book)
  } catch(e) {
    res.status(400).json({
      message: 'You: I attempt to through the scroll into the fire. *rolls 1* DM: As you rummage through your bag trying to find the scroll, you cut yourself on a knife. Then in your anger, you throw the knife into the fire and forget to destroy the cursed scroll leaving your cursed for all your days.'
    })
  }
})

module.exports = router