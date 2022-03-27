require('dotenv').config()
const express = require('express')
const app = express()

const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

app.get('/', (req, res) => {
  res.send('Welcome to some books.')
})

app.listen(process.env.PORT, () => {
  console.log('Read a BOOK.')
})