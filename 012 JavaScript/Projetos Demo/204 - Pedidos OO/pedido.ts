import { Cliente } from "./cliente"
import { ItemPedido } from "./itemPedido";

export class Pedido{
    private _cod: number;
    private _cliente: Cliente;
    private _itensPedido: ItemPedido[]; 

    constructor(cod: number, cliente: Cliente, itensPedido?: ItemPedido[]){
        this.cod = cod;
        this.cliente = cliente;
        this.itensPedido = itensPedido; 
    }

    public get cod(): number {
        return this._cod;
    }
    public set cod(value: number) {
        this._cod = value;
    }

    public get cliente(): Cliente {
        return this._cliente;
    }
    public set cliente(value: Cliente) {
        this._cliente = value;
    }

    public get itensPedido(): ItemPedido[] {
        return this._itensPedido;
    }
    public set itensPedido(value: ItemPedido[]) {
        this._itensPedido = value;
    }

    public addItemPedido(value: ItemPedido){
        this._itensPedido.push(value)
    }

    public getValorTotal() : number{
        var valorTotal : number = 0
        this._itensPedido.forEach(itemDePedido => {
            valorTotal = valorTotal + (itemDePedido.qtd * itemDePedido.valor)
        });
        return valorTotal; 
    }

    public getRelatorio() : string{
        var rel : string

        var detalhe : string

        this._itensPedido.forEach(it => {
            detalhe = detalhe + `${it.cod} | ${it.descricao}      | ${it.qtd}  | ${it.valor} \n`
        });

        rel = `           Pedido                     Núm.: ${this._cod} \n
               Cliente: ${this._cliente.nome}        Tel.: ${this._cliente.tel} \n
               CPF: ${this._cliente.cpf}             RG  : ${this._cliente.rg} \n
               Itens Pedido                                                  \n
                ${detalhe}`; 

        return rel 


    }

}