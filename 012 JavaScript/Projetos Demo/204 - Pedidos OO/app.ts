import { Cliente } from "./cliente"
import { ItemPedido } from "./itemPedido"
import { Pedido } from "./pedido";

var cliente : Cliente;
var itemPedido: ItemPedido;
var pedido : Pedido;  

//recebendo dados da tela
var clienteUI = {
    nomeCliente : "Felisberto", 
    cpf : "000.000.000-12", 
    rg : "4.004.090", 
    tel : "+55(47)99890-2245"
}
//Cliente

cliente = new Cliente(clienteUI.nomeCliente, clienteUI.cpf, clienteUI.rg, clienteUI.tel)

pedido = new Pedido(1, cliente, [])


var itemPedidoUI_01 = {
    cod : 1654,
    descricao : "Feijao", 
    valor : 7.50,
    qtd : 3
}

itemPedido = new ItemPedido(itemPedidoUI_01.cod, itemPedidoUI_01.descricao, itemPedidoUI_01.valor, itemPedidoUI_01.qtd)
pedido.addItemPedido(itemPedido)

var itemPedidoUI_02 = {
    cod : 278,
    descricao : "Arroz", 
    valor : 10.00,
    qtd : 1
}

itemPedido = new ItemPedido(itemPedidoUI_02.cod, itemPedidoUI_02.descricao, itemPedidoUI_02.valor, itemPedidoUI_02.qtd)
pedido.addItemPedido(itemPedido)

var itemPedidoUI_03 = {
    cod : 352,
    descricao : "macarrao", 
    valor : 5.50,
    qtd : 2
}

itemPedido = new ItemPedido(itemPedidoUI_03.cod, itemPedidoUI_03.descricao, itemPedidoUI_03.valor, itemPedidoUI_03.qtd)
pedido.addItemPedido(itemPedido)

console.log("Valor Total do Pedido: " + pedido.getValorTotal());

console.log(pedido.getRelatorio());
//console.table(pedido.itensPedido);



