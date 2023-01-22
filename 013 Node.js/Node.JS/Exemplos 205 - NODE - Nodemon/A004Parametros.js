/********* Web Technology Development Training **************************************************
 * Instructor  : Ivan J. Borchardt - linkedin.com/in/ivan-borchardt/
 *                                 - github.com/Ivan-J-Borchardt
 * Description : NODE - Nodemon
 * Date        : 01.2021 
 ************************************************************************************************/


/*
O Nodemon possibilita que se teste alterações no server.js sem a necessidade de reiniciar o servidor.

Instalando o nodemon
===============================================

>npm install nodemon -g 

 
*** O -g significa que a instalação será global e não apenas no projeto 

**** Chamar o server.js com o Nodemon: >nodemon  A004Parametros.js
*/

const express = require('express'); //O módulo express retorna uma função que instancia o express

const app = express(); //A função express cria uma instância de todo o framework express em app

//Cria o Servidor com o express
app.listen(3001, function(){
    console.log(`Servidor Rodando na porta 3001...`) 
})

//Rotas da aplicação
app.get('/', function(req, resp){
    resp.send(
        `<html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Olá Pigmeu!!! </h1>
            </body>
        </html>
        `          
    );
});

app.get('/livros', function(req, resp){
    resp.send(
        `<html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Listagem de Livros </h1>
            </body>
        </html>
        `          
    );
});

//Exemplo de rota com parâmetro
app.get('/ola/:nome/:cargo', function(req, resp){
    //resp.send(req.params);
    resp.send("<h1> Ola " +req.params.nome + "</h1>");

});
