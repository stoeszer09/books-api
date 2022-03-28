const express = require('express')
const router = express.Router()

// INDEX
router.get('/', (req, res) => {
  res.json('the books')
})

module.exports = router