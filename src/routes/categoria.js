const express = require('express')
const categoriaController = require('../controller/categoriaController')
const router = express.Router()

router.post('/', categoriaController.createCategoria)
router.get('/', categoriaController.listCategoria)
router.get('/nome', categoriaController.listCategoriaNome)

module.exports = router