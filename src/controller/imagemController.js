const Imagem = require('../models/Imagem')

module.exports = {
    async createImagem(req,res){
        Imagem.create(req.body).then(()=>{
            return res.status(201).send({mensgem: "sucesso"})
        }).catch((err)=>{
            return res.status(400).send({erro: err})
        })
    },

    async listImagem(req, res){
        Imagem.find().then((imagem)=>{
            return res.status(200).send({imagem})
        }).catch((err)=>{
            return res.status(400).send({erro: err})
        })
    },

}