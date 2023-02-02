const Exercicio = require('../models/Exercicio')

module.exports = {
    async createExercicio(req,res){
        Exercicio.create(req.body).then(()=>{
            return res.status(201).send({mensgem: "sucesso"})
        }).catch((err)=>{
            return res.status(400).send({erro: err})
        })
    },

    async listExercicio(req,res){
        Exercicio.find().then((exercicios)=>{
            return res.status(200).send({exercicios})
        }).catch((err)=>{
            return res.status(400).send({erro: err})
        })
    },

    async listExercicioNome(req,res){
        Exercicio.find({'nomeExercicio': req.body.nomeExercicio}).then((exercicios)=>{
            return res.status(200).send({exercicios})
        }).catch((err)=>{
            return res.status(400).send({erro: err})
        })
    },
}