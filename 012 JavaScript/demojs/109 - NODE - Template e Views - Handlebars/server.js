const express = require("express")
const handlebars = require("express-handlebars")
const app = express()


//configurar handlebars
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")



//rotas 
app.get("/cad/:tela", function (req, resp) {
        var estatisticas = {
            respostaA: 25, 
            respostaB: 25, 
            respostaC: 50, 
            condicao : false, 
            vetor    : [1,2,3]
        }

        if (req.params.tela == "1") {
            resp.render("formulario", estatisticas) 
        }else{
            resp.render("formulario2")
        }
    
})


//Cria server com express
app.listen(3001, function () {
    console.log("Server Rodando na porta 3001");
})