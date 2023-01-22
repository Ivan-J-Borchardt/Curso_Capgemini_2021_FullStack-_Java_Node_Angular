/********* Web Technology Development Training **************************************************
 * Instructor  : Ivan J. Borchardt - linkedin.com/in/ivan-borchardt/
 *                                 - github.com/Ivan-J-Borchardt
 * Description : NODE - HTTP Protocol - First Server
 * Date        : 01.2021 
 ************************************************************************************************/

//Desenvolvendo o servidor Node
//-------------------------------------
    const http = require('http');  //Carrega o módulo HTTP (este módulo já vem com o node js)


    const servidor = http.createServer(function(req, resp){ //a função createServer recebe
                                                            //uma função de callback... 
        resp.end(  //Rebece um template HTML         
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
    servidor.listen(3001);
