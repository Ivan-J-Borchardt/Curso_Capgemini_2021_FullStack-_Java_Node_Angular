"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemPedido = void 0;
var ItemPedido = /** @class */ (function () {
    function ItemPedido(cod, descricao, valor, qtd) {
        this.cod = cod;
        this.descricao = descricao;
        this.valor = valor;
        this.qtd = qtd;
    }
    Object.defineProperty(ItemPedido.prototype, "cod", {
        get: function () {
            return this._cod;
        },
        set: function (value) {
            this._cod = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ItemPedido.prototype, "descricao", {
        get: function () {
            return this._descricao;
        },
        set: function (value) {
            this._descricao = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ItemPedido.prototype, "valor", {
        get: function () {
            return this._valor;
        },
        set: function (value) {
            this._valor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ItemPedido.prototype, "qtd", {
        get: function () {
            return this._qtd;
        },
        set: function (value) {
            this._qtd = value;
        },
        enumerable: false,
        configurable: true
    });
    return ItemPedido;
}());
exports.ItemPedido = ItemPedido;
