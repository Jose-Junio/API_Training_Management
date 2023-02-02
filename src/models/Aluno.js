const mongoose = require('../database/connection')

const Schema = mongoose.Schema

const AlunoSchema = new Schema({
    nomeAluno: {
        type: String,
        require: true
    },
    apelido: {
        type: String,
    },
    telefone:{
        type: String,
        require: true,
    },
    meta:{
        type: String,
    }
})

const Aluno = mongoose.model('Aluno', AlunoSchema)

module.exports = Aluno