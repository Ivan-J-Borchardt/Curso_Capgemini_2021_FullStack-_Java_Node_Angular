//Anotações de tipo 
var num1 = 3;
var isIniciante = true;
var nome = "Ivan JB";
var sentenca = "Meu nome \u00E9 " + nome;
//Multiplos tipos 
var multiType;
//Vetores 
var vetor1 = [1, 2, 3];
var vetor2 = [1, 2, 3];
var pessoa = ["Ivan JB", 23];
//tipos especiais: any, null, undefined
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var variavel = 10;
variavel = true;
variavel = "Olá";
//Tipo any 
var variavel2 = 10;
console.log(variavel2.nome);
variavel2();
variavel2.toUpperCase();
//Declaração por inferencia de tipo/valor
var num; //tipo any
num = 2;
var numero = 3.14;
num = "teste";
console.log(num);
var user = {
    nome: "Daniela",
    idade: 25
};
//console.log(user.senha);
