"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nome, cpf, rg, tel) {
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.tel = tel;
    }
    Object.defineProperty(Cliente.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "cpf", {
        get: function () {
            return this._cpf;
        },
        set: function (cpf) {
            this._cpf = cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "rg", {
        get: function () {
            return this._rg;
        },
        set: function (rg) {
            this._rg = rg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "tel", {
        get: function () {
            return this._tel;
        },
        set: function (tel) {
            this._tel = tel;
        },
        enumerable: false,
        configurable: true
    });
    return Cliente;
}());
exports.Cliente = Cliente;
