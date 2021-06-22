const express = require('express')
const router = express.Router()
const { registerController } = require('../controllers/userActions')

router.post('/', registerController)

module.exports = router