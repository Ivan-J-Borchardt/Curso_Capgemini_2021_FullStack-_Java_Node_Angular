/********* Web Technology Development Training **************************************************
 * Instructor  : Ivan J. Borchardt - linkedin.com/in/ivan-borchardt/
 *                                 - github.com/Ivan-J-Borchardt
 * Description : NODE - Returning Static Files  
 * Date        : 01.2021 
 ************************************************************************************************/


const express = require('express'); //O módulo express retorna uma função que instancia o express
const app = express(); //A função express cria uma instância de todo o framework express em app
const bodyParser = require('body-parser');

const path = require("path");

//Config 
    //Body Parser 
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json()); 

//Public 
    app.use(express.static(path.join(__dirname, "public")));   

//Cria o Servidor com o express
    app.listen(3001, function(){
        console.log(`Servidor Rodando na porta 3001...`) 
    })


//Rotas da aplicação
    app.get('/', function(req, resp){
        
        resp.sendFile(__dirname + "/html/index.html");
    });

    app.post('/dolar', function(req, resp){
        //resp.send("Furmulário recebido!!!: " + req.query.nmValor);  - *.query.* para o método GET
        let num = Number(req.body.nmValor);
        num = num + 1; 
        resp.send("Furmulário recebido!!!: " + num);
    });


   // https://www.youtube.com/watch?v=XlvR0_AECoI&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=28