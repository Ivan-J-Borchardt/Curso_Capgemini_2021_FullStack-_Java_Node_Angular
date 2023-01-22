const express = require("express")
const conversorJson = require("body-parser")

const app = express()

//convertendo os dados do corpo da requisição para JavaScript Object  
app.use(conversorJson.urlencoded({extended: false}))
app.use(conversorJson.json())

//Middlewares...
app.use(function (req, resp, next) {
    console.log("Middleware 1");

   /*
    if (req.body.nmUser == "XPTO" && req.body.nmSenha === 1234) {
        resp.token = {
            teste : "OK"
        }
        next()
    }
    resp.status(401).end()
    */
   
    next()

})

app.use(function (req, resp, next) {
    setTimeout(function() {
        console.log("Middleware 2");
    }, 2000)
    next()
})

app.use("/usuario/:cod", function (req, resp, next) {
    
    console.log("Middleware 3 " + resp.token.teste);
    next()
})


function verificaUser(req, resp, next) {

    if (req.body.nmUser == "XPTO" && req.body.nmSenha === 1234) {
        resp.token = {
            teste : "OK"
        }
        next()
    }
    
    resp.status(401).end()
}

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
               codigoUser: req.query.nmCodUser, 
               token: resp.token.teste})
})


app.get("/usuario/:cod", function (req, resp) {

    resp.json({msn: "Chegou na rota usuario - GET", codigo: req.params.cod})
})

app.post("/usuario", verificaUser, function (req, resp) {
    resp.json({msn: "Chegou na rota usuario - POST", user: req.body.nmUser, cod: req.body.nmSenha})
})