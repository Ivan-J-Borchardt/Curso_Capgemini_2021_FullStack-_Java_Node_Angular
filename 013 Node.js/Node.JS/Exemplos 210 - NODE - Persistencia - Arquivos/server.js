/********* Web Technology Development Training **************************************************
 * Instructor  : Ivan J. Borchardt - linkedin.com/in/ivan-borchardt/
 *                                 - github.com/Ivan-J-Borchardt
 * Description : NODE - Persistence in Filesytem 
 * Date        : 01.2021 
 ************************************************************************************************/
const express = require('express'); //O módulo express retorna uma função que instancia o express
const app = express(); //A função express cria uma instância de todo o framework express em app
const bodyParser = require('body-parser');
const path = require("path");

const fs = require('fs');

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

        fs.appendFile('cotacaoDolar', num + '\n', function(err) {
            if (err) {
                throw err; 
            }else{
                console.log('Cotacao salva'); 
            }
        });

    });

    app.get('/arq', function(req, resp){
        fs.readFile('temp.json', function (err, data) {
           // resp.send(data);
           
           let user = JSON.parse(data.toString()); 
           resp.json(user.name);

           //resp.writeHead(200, {'Content-Type': 'text/html'});
           //resp.write(data);   
           //return resp.end();
        }); 
    });


   // x