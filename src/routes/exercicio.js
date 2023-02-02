const express = require('express')
const exerciciosController = require('../controller/exerciciosController')
const router = express.Router()

router.post('/', exerciciosController.createExercicio)
router.get('/', exerciciosController.listExercicio)
router.get('/nome', exerciciosController.listExercicioNome)

module.exports = router