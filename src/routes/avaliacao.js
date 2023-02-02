const express = require('express')
const router = express.Router()

const avaliacaoController = require('../controller/avaliacaoController')

router.post('/',avaliacaoController.createAvaliacao)
router.get('/', avaliacaoController.listAvaliacao)

module.exports = router