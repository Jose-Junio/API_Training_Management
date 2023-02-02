const mongoose = require('../database/connection')

const Schema = mongoose.Schema

const AvaliacaoSchema = new Schema({
    peso: {
        type: Number,
        require: true, 
        min: [0, 'Pouco.']
    },
    altura: {
        type: Number,
        require: true, 
        min: [0, 'Pouco.']
    },
    percentualGordura: {
        type: Number,
        require: true, 
        min: [0, 'Pouco.']
    },
    medidaBraco: {
        type: Number,
        require: true, 
        min: [0, 'Pouco.']
    },
    MedidaPerna: {
        type: Number,
        require: true, 
        min: [0, 'Pouco.']
    },
    MedidaBarriga: {
        type: Number,
        require: true, 
        min: [0, 'Pouco.']
    },
    idAlunoAvaliacao:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Aluno',
        require: true
    }
})

AvaliacaoSchema.set('timestamps', true)

const Avaliacao = mongoose.model('Avaliacao', AvaliacaoSchema)

module.exports = Avaliacao