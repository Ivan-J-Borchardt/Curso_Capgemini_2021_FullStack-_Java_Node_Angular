"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa_1 = require("./pessoa");
var ps;
ps = new pessoa_1.Pessoa("Felisberto", "000.000.000-12");
//ps.nome = "Felisberto" 
//ps.cpf = "000.000.000-12"
var nome = ps.nome;
ps.cumprimentar("Ivan");
