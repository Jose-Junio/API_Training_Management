const Categoria = require('../models/Categoria')

module.exports = {
    async createCategoria(req,res){
        Categoria.create(req.body).then(()=>{
            return res.status(201).send({mensgem: "sucesso"})
        }).catch((err)=>{
            return res.status(400).send({erro: err})
        })
    },

    async listCategoria(req,res){
        Categoria.find().then((categoria)=>{
            return res.status(200).send({categoria})
        }).catch((err)=>{
            return res.status(400).send({erro: err})
        })
    },

    async listCategoriaNome(req,res){
        Categoria.find({'nomeCategoria': req.body.nome}).then((categoria)=>{
            return res.status(200).send({categoria})
        }).catch((err)=>{
            return res.status(400).send({erro: err})
        })
    },
}