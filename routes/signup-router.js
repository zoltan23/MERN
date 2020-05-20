const express = require('express')

const SignUpCtrl = require('../controllers/signup-ctrl')

const router = express.Router()

router.post('/signup', SignUpCtrl.signUpUser)

module.exports = router