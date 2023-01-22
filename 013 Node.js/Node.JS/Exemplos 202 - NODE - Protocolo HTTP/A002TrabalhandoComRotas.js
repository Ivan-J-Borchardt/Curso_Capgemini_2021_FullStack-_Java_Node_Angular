/********* Web Technology Development Training **************************************************
 * Instructor  : Ivan J. Borchardt - linkedin.com/in/ivan-borchardt/
 *                                 - github.com/Ivan-J-Borchardt
 * Description : NODE - HTTP Protocol - First Server - Working with routes
 * Date        : 01.2021 
 ************************************************************************************************/

//Desenvolvendo o servidor Node
    const http = require('http'); 

    const servidor = http.createServer(function(req, resp){

        let html = '';
        if (req.url == '/') { //Rota raiz
            html =              
            `<html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Olá Pigmeu!!! </h1>
                </body>
            </html>
            `   
        } else if(req.url == '/livros'){ //Rota Livros
            html =              
            `<html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Página de Livros </h1>
                </body>
            </html>
            ` 
        }

        resp.end(html);
    });
    servidor.listen(3001);
