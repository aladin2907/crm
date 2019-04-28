const exspress = require('express')
const router = exspress.Router()
const controller = require('../controllers/auth')
    //localhost:5000/api/auth/login
router.get('/login', controller.login)

//localhost:5000/api/auth/register
router.get('/register', controller.register)

module.exports = router