const exspress = require('express')
const router = exspress.Router()
const controller = require('../controllers/analytics')



router.get('/overview', controller.overview)
router.get('/analytics', controller.analytics)

module.exports = router