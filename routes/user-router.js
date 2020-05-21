const express = require('express')
//const verify = require('../utils/auth')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

router.post('/user',  UserCtrl.createUser)
router.put('/user/:id', UserCtrl.updateUser)
router.get('/user/:id', UserCtrl.getUserById)
router.get('/users', UserCtrl.getUsers)
router.delete('/user/:id', UserCtrl.deleteUser)

module.exports = router