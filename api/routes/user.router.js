const router = require('express').Router()
const { 
    listUsers,
    createUser
 } = require('../controllers/user.controller')

router.get('/',listUsers )

router.post('/', createUser)

module.exports = router