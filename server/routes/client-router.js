const express = require('express')

const ClientCtrl = require('../controllers/client-ctrl')

const router = express.Router()

router.post('/client', ClientCtrl.createClient)
router.put('/client/:id', ClientCtrl.updateClient)


module.exports = router