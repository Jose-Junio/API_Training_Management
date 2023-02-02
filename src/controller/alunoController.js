const Aluno = require('../models/Aluno')

module.exports = {

    async createAluno(req,res){
        Aluno.create(req.body).then(()=>{
            return res.status(201).send({mensgem: "sucesso"})
        }).catch((err)=>{
            return res.status(400).send({erro: err})
        })
    },

    async listAluno(req,res){
        Aluno.find().then((alunos)=>{
            return res.status(200).send({alunos})
        }).catch((err)=>{
            return res.status(400).send({erro: err})
        })
    },

    async listAlunoNome(req,res){
        Aluno.find({'nomeAluno': req.body.nome}).then((alunos)=>{
            return res.status(200).send({alunos})
        }).catch((err)=>{
            return res.status(400).send({erro: err})
        })
    },
}