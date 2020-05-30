const express = require('express')
const LoginCtrl = require('../controllers/login-ctrl')

const router = express.Router()

router.post('/login', LoginCtrl.loginUser)

module.exports = router