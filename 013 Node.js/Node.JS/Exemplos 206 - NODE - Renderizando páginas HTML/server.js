/********* Web Technology Development Training **************************************************
 * Instructor  : Ivan J. Borchardt - linkedin.com/in/ivan-borchardt/
 *                                 - github.com/Ivan-J-Borchardt
 * Description : NODE - Render HTML pages
 * Date        : 01.2021 
 ************************************************************************************************/


const express = require('express'); //O módulo express retorna uma função que instancia o express

const app = express(); //A função express cria uma instância de todo o framework express em app

//Cria o Servidor com o express
app.listen(3001, function(){
    console.log(`Servidor Rodando na porta 3001...`) 
})

//Rotas da aplicação
app.get('/', function(req, resp){
    resp.sendFile(__dirname + "/html/index.html");//__dirname retorna o diretório raiz da aplicação
});

app.get('/sobre', function(req, resp){
    resp.sendFile(__dirname + "/html/sobre.html");//__dirname retorna o diretório raiz da aplicação
});
