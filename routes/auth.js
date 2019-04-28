const exspress = require('express')
const router = exspress.Router()
const controller = require('../controllers/auth')
    //localhost:5000/api/auth/login
router.post('/login', controller.login)

//localhost:5000/api/auth/register
router.post('/register', controller.register)

module.exports = router