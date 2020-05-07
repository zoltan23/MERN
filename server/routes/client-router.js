const express = require('express')

const ClientCtrl = require('../controllers/client-ctrl')

const router = express.Router()

router.post('/client', ClientCtrl.createClient)
router.put('/client/:id', ClientCtrl.updateClient)
router.get('/client/:id', ClientCtrl.getClientById)
router.get('/clients', ClientCtrl.getClients)


module.exports = router