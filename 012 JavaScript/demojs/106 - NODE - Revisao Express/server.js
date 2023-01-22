const express = require("express")
const conversorJson = require("body-parser")

const app = express()

//convertendo os dados do corpo da requisição para JavaScript Object  
app.use(conversorJson.urlencoded({extended: false}))
app.use(conversorJson.json())




//----------------------------------------------------------

const porta = 3001
app.listen(porta, function () {
    console.log("Servidor rodando na porta " + porta);
})



app.get("/", function (req, resp) {
    
    resp.sendFile(__dirname + "/views/index.html")
})


app.get("/usuario", function (req, resp) {
    
    resp.json({msn: "Chegou na rota usuario - GET", 
               user: req.query.nmUser, 
               codigoUser: req.query.nmCodUser})
})


app.get("/usuario/:cod", function (req, resp) {

    resp.json({msn: "Chegou na rota usuario - GET", codigo: req.params.cod})
})


app.post("/usuario", function (req, resp) {

    resp.json({msn: "Chegou na rota usuario - POST", 
               user: req.body.nmUser, 
               cod: req.body.nmSenha})
})