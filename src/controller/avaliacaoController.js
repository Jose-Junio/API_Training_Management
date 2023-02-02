const Avaliacao = require('../models/Avaliacao')

module.exports = {
    async createAvaliacao(req,res){
        Avaliacao.create(req.body).then(()=>{
            return res.status(201).send({mensgem: "sucesso"})
        }).catch((err)=>{
            return res.status(400).send({erro: err})
        })
    },

    async listAvaliacao(req, res){
        Avaliacao.find().then((avaliacao)=>{
            return res.status(200).send({avaliacao})
        }).catch((err)=>{
            return res.status(400).send({erro: err})
        })
    },

}