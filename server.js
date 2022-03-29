// CONFIGURATION
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// CONTROLLERS
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

//ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to some books.')
})

app.get('*', (req, res) => {
  res.send('Error 404')
})

// LISTEN
app.listen(process.env.PORT, () => {
  console.log('Read a BOOK.')
})