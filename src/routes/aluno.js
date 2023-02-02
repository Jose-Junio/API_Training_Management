const express = require('express')
const router = express.Router()

const alunoController = require('../controller/alunoController')

router.post('/', alunoController.createAluno)
router.get('/', alunoController.listAluno)
router.get('/nome', alunoController.listAlunoNome)

module.exports = router