const express = require("express")
const app = express()
const bodyParser = require('body-parser')

//import rotas
const aluno = require('./src/routes/aluno')
const avaliacao = require('./src/routes/avaliacao')
const categoria = require('./src/routes/categoria')
const ficha = require('./src/routes/ficha')
const exercicio = require('./src/routes/exercicio')
const imagem = require('./src/routes/imagem')
const fichaExercicio = require('./src/routes/fichaExercicio')

app.use(bodyParser.urlencoded({extended: false}))//dados simples
app.use(bodyParser.json())//apenas entrada de json no body

//rotas
app.use('/aluno',aluno)
app.use('/avaliacao',avaliacao)
app.use('/categoria', categoria)
app.use('/ficha', ficha)
app.use('/exercicio', exercicio)
app.use('/imagem', imagem)
app.use('/fichaExercicio', fichaExercicio)

app.use((req,res,next)=>{
    const err = new Error("Não encontrado")
    err.status = 404
    next(err)
})

app.use((err,req,res,next)=>{
    res.status(err.status || 500)
    return res.send({
        erro:{
            mensagem: err.menssage
        }
    })
})

//iniciando server
const PORT = 8082

app.listen(PORT, ()=>{
    console.log("Servidor rodando na porta "+PORT+"...")
})