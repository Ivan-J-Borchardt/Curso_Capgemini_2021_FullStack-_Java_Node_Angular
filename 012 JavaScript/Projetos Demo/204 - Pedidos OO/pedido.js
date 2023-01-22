"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido(cod, cliente, itensPedido) {
        this.cod = cod;
        this.cliente = cliente;
        this.itensPedido = itensPedido;
    }
    Object.defineProperty(Pedido.prototype, "cod", {
        get: function () {
            return this._cod;
        },
        set: function (value) {
            this._cod = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pedido.prototype, "cliente", {
        get: function () {
            return this._cliente;
        },
        set: function (value) {
            this._cliente = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pedido.prototype, "itensPedido", {
        get: function () {
            return this._itensPedido;
        },
        set: function (value) {
            this._itensPedido = value;
        },
        enumerable: false,
        configurable: true
    });
    Pedido.prototype.addItemPedido = function (value) {
        this._itensPedido.push(value);
    };
    Pedido.prototype.getValorTotal = function () {
        var valorTotal = 0;
        this._itensPedido.forEach(function (itemDePedido) {
            valorTotal = valorTotal + (itemDePedido.qtd * itemDePedido.valor);
        });
        return valorTotal;
    };
    Pedido.prototype.getRelatorio = function () {
        var rel;
        var detalhe;
        this._itensPedido.forEach(function (it) {
            detalhe = detalhe + (it.cod + " | " + it.descricao + "      | " + it.qtd + "  | " + it.valor + " \n");
        });
        rel = "           Pedido                     N\u00FAm.: " + this._cod + " \n\n               Cliente: " + this._cliente.nome + "        Tel.: " + this._cliente.tel + " \n\n               CPF: " + this._cliente.cpf + "             RG  : " + this._cliente.rg + " \n\n               Itens Pedido                                                  \n\n                " + detalhe;
        return rel;
    };
    return Pedido;
}());
exports.Pedido = Pedido;
