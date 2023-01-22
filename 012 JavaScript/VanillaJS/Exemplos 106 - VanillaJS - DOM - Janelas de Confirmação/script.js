/********* Web Technology Development Training **************************************************
 * Instructor  : Ivan J. Borchardt - linkedin.com/in/ivan-borchardt/
 *                                 - github.com/Ivan-J-Borchardt
 * Description : DOM Manipulation - Confirmation Windows
 * Date        : 01.2021 
 ************************************************************************************************/

//Alertas 
//-----------------------------------
/**
 * Sua principal função é mostrar ao usuário uma mensagem e um botão de confirmação 
 * de que o usuário tenha visto a mensagem. Para chamar essa função, basta utilizarmos
 *  o código alert(), que receberá uma string(mensagem que será exibida ao usuário).
 * Elas são muito usadas em validações de formulários e/ou bloqueio de ações do browser.
 */
function alerta(){
    alert("O Botão foi clicado!");
}


//Janelas de confirmação 
//-----------------------------------------
/**
 * A função de confirmação é um pouco diferente da função alert em JavaScript, dessa vez
 *  são exibidos dois botões, um de OK e outro de CANCELAR, separados por valores true 
 * (verdadeiro) e false (falso).
 * 
 * A função confirm() é muito utilizada em sistemas que utilizamos estruturas condicionais,
 * como confirmação de alteração/exclusão de algum registro do banco de dados.
 */
function confirmar(){
    var confirma;

    confirma = window.confirm("Confirma a exclusão?");
    
    if (confirma) {
        console.log("Você clicou em confirmar");
    }else{
        console.log("Você clicou em cancelar");
    }
}


//Alert de Prompt 
//-----------------------------------------
/**
 * O prompt é um pouco diferente do alert() e do confirm(), pois ele necessita que o usuário 
 * insira algum valor, ou seja, precisa de uma interação direta do usuário para que ele funcione.
 * Para chamarmos a função utilizamos o prompt(), o qual irá receber uma string(mensagem) que 
 * será exibida, normalmente em forma de pergunta, ao usuário.
 */

 function perguntar(){
     var idade; 

     idade = prompt("Digite sua idade:"); 
     console.log(idade); 
 }







