
const bookController = require('../controller/BookController')
const router = require('express').Router()

router.get('/api/books', bookController.getAllBooks)
router.get('/api/books/:id', bookController.getSingleBook)
router.post('/api/book', bookController.addNewBook)


module.exports = router

