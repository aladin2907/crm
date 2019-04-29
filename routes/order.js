const exspress = require('express')
const router = exspress.Router()
const controller = require('../controllers/order')



router.get('/', controller.getAll)
router.post('/', controller.create)

module.exports = router