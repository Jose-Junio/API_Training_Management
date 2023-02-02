const mongoose = require('../database/connection')

const Schema = mongoose.Schema

const ImagemSchema = new Schema({
    nomeImagem:{
        type: String,
        require: true
    },
    URL:{
        type: String,
        require: true
    },
    idExercicioImagem:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercicio',
        require: true
    }
})

const Imagem = mongoose.model('Imagem', ImagemSchema)

module.exports = Imagem