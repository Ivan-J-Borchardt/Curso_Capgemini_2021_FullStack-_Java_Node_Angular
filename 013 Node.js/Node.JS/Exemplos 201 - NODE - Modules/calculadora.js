/********* Web Technology Development Training **************************************************
 * Instructor  : Ivan J. Borchardt - linkedin.com/in/ivan-borchardt/
 *                                 - github.com/Ivan-J-Borchardt
 * Description : NODE - Modules - requiring the modules
 * Date        : 01.2021 
 ************************************************************************************************/

/*
function soma(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function multi(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

console.log(soma(3,5));
*/


var somar = require("./soma.js");  //a função require carrega o módulo 
var subtrair = require("./sub"); //a extenção .js pode ser omitida...
var multiplicar = require("./multi"); 
var dividir = require("./div"); 


console.log(somar(2,3));
