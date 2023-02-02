const express = require('express')
const fichaExercicio = require('../controller/fichaExercicioController')
const router = express.Router()

router.post('/', fichaExercicio.createFichaExercicio)
router.get('/', fichaExercicio.listFichaExercicio)

module.exports = router