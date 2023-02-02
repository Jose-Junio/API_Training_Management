const FichaExercicio = require('../models/FichaExercicio')

module.exports = {
    async createFichaExercicio(req,res){
        FichaExercicio.create(req.body).then(()=>{
            return res.status(201).send({mensgem: "sucesso"})
        }).catch((err)=>{
            return res.status(400).send({erro: err})
        })
    },

    async listFichaExercicio(req, res){
        FichaExercicio.find().then((ficha)=>{
            return res.status(200).send({ficha})
        }).catch((err)=>{
            return res.status(400).send({erro: err})
        })
    },

}