const mongoose = require('../database/connection')

const Schema = mongoose.Schema

const ExercicioSchema = new Schema({
    nomeExercicio: {
        type: String,
        require: true, 
    },
    idCategoriaExercicio:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categoria',
        require: true
    }
})

const Exercicio = mongoose.model('Exercicio', ExercicioSchema)

module.exports = Exercicio