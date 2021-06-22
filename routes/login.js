const express = require('express')
const router = express.Router()
const { loginController } = require('../controllers/userActions')

router.post('/', loginController)

module.exports = router