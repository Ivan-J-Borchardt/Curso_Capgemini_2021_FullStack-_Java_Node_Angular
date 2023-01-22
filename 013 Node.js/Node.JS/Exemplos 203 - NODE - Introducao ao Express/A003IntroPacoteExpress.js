/********* Web Technology Development Training **************************************************
 * Instructor  : Ivan J. Borchardt - linkedin.com/in/ivan-borchardt/
 *                                 - github.com/Ivan-J-Borchardt
 * Description : NODE - Introduction to Express 
 * Date        : 01.2021 
 ************************************************************************************************/

/*
   1. Baixar o framework Express via npm 
      a. Uma pasta nome_modules será criada no raiz do projeto 
      b. Será criado um arquivo package-lock.json com configurações dos 
         módulos instalados no projeto
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

//Retornando um Json... 
app.get('/usuarios', function(req, resp){
    const users = ['João', 'Joana', 'Annabella']
    resp.json({ users })
});
