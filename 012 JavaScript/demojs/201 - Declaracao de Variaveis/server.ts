//Anotações de tipo 
var num1 : number = 3
var isIniciante : boolean = true
var nome : string = "Ivan JB"
let sentenca : string = `Meu nome é ${nome}`
//Multiplos tipos 
let multiType : number | boolean 

//Vetores 
let vetor1: number[] = [1, 2, 3]
let vetor2: Array<number> = [1, 2, 3]

let pessoa: [string, number] = ["Ivan JB", 23]

//tipos especiais: any, null, undefined

let n: null = null
let u: undefined = undefined

let isNew : boolean = null
let myName : string = undefined

let variavel : any = 10
variavel = true 
variavel = "Olá"

//Tipo any vs. unknown 

let variavel2 : any = 10 
console.log(variavel2.nome);
variavel2()
variavel2.toUpperCase()

/*
let variavel3 : unknown = 10 
console.log(variavel3.nome);
variavel3()
variavel3.toUpperCase
*/

// Asserções de tipo (casting em outras linguagens)

var varString = (variavel2 as string)

// Intelisense
//===============
//nome.
//num1.
//user.

//Declaração por inferencia de tipo/valor
var num //tipo any
num = 2
const numero = 3.14
num = "teste"

console.log(num);

const user = {
    nome: "Daniela", 
    idade: 25
}

//console.log(user.senha);
