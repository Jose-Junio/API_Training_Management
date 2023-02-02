const Ficha = require('../models/Ficha')

module.exports = {
    async createFicha(req,res){
        Ficha.create(req.body).then(()=>{
            return res.status(201).send({mensgem: "sucesso"})
        }).catch((err)=>{
            return res.status(400).send({erro: err})
        })
    },

    async listFicha(req, res){
        Ficha.find().then((ficha)=>{
            return res.status(200).send({ficha})
        }).catch((err)=>{
            return res.status(400).send({erro: err})
        })
    },

}