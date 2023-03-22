
const router = require('express').Router()
const {
    listBooks,
    createBook
} = require('../controllers/book.controller')

router.get('/', listBooks)
router.post('/', createBook)



module.exports = router 