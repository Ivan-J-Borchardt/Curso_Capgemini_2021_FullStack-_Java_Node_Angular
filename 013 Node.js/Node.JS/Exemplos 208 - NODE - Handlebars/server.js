/********* Web Technology Development Training **************************************************
 * Instructor  : Ivan J. Borchardt - linkedin.com/in/ivan-borchardt/
 *                                 - github.com/Ivan-J-Borchardt
 * Description : NODE - Handlebars  
 * Date        : 01.2021 
 ************************************************************************************************/
const express = require('express'); //O módulo express retorna uma função que instancia o express
const app = express(); //A função express cria uma instância de todo o framework express em app
const handelebars = require('express-handlebars');


//Configurar Handlebars como template engine
    app.engine('handlebars', handelebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');


//Rotas
    app.get('/cad', function(req, res){
        res.render('formulario');//renderiza o arquivo formulario no main
    });

//Cria o Servidor com o express
    app.listen(3001, function(){
        console.log(`Servidor Rodando na porta 3001...`) 
    });


