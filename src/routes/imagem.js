const express = require('express')
const imagemController = require('../controller/imagemController')
const router = express.Router()

router.post('/', imagemController.createImagem)
router.get('/', imagemController.listImagem)

module.exports = router