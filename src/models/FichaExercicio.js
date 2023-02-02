const mongoose = require('../database/connection')

const Schema = mongoose.Schema

const FichaExercicioSchema = new Schema({
    peso:{
        type: Number,
        require: true, 
        min: [0, 'Pouco.']
    },
    numeroRepeticoes:{
        type: Number,
        require: true, 
        min: [0, 'Pouco.']
    },
    numeroSeries:{
        type: Number,
        require: true, 
        min: [0, 'Pouco.']
    },
    idFichaFE:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ficha',
        require: true
    },
    idExercicioFE:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercicio',
        require: true
    }
})

const FichaExercicio = mongoose.model('FichaExercicio', FichaExercicioSchema)

module.exports = FichaExercicio