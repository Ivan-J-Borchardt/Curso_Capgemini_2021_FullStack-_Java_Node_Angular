"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    //Modificadores de Acesso --- public, private, protected
    //método Construtor
    function Pessoa(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    Object.defineProperty(Pessoa.prototype, "nome", {
        //Métodos de acesso (getter e setter)
        get: function () {
            if (this._nome == "") {
                return "Nome nao atribuido";
            }
            return this._nome;
        },
        set: function (nome) {
            if (nome != "") {
                this._nome = nome;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "cpf", {
        get: function () {
            return this._cpf;
        },
        set: function (cpf) {
            if (this.validarCpf(cpf)) {
                this._cpf = cpf;
            }
        },
        enumerable: false,
        configurable: true
    });
    //Métodos da classe - Comportamentos da classe 
    Pessoa.prototype.cumprimentar = function (nome) {
        console.log("Ol\u00E1 " + nome + " meu nome \u00E9 " + this._nome);
    };
    Pessoa.prototype.validarCpf = function (cpf) {
        if (cpf == "") {
            return false;
        }
        return true;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
