const express = require('express')
const fichaController = require('../controller/fichaController')
const router = express.Router()

router.post('/', fichaController.createFicha)
router.get('/', fichaController.listFicha)

module.exports = router