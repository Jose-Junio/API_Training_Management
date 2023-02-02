const mongoose = require('../database/connection')

const Schema = mongoose.Schema

const FichaSchema = new Schema({
    nomeFicha:{
        type: String,
        require: true
    },
    idAlunoFicha:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Aluno',
        require: true
    }
})

FichaSchema.set('timestamps', true)

const Ficha = mongoose.model('Ficha', FichaSchema)

module.exports = Ficha