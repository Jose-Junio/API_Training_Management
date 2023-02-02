const mongoose = require('../database/connection')

const Schema = mongoose.Schema

const CategoriaSchema = new Schema({
    nomeCategoria: {
        type: String,
        require: true 
    },
    descricao:{
        type: String,
        require: true
    }
})

const Categoria = mongoose.model('Categoria', CategoriaSchema)

module.exports = Categoria