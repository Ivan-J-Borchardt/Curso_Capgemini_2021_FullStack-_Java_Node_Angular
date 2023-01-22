//1- Capturar dados da tela
var pizzas = []; //criação do array
function cadastrar() {
    var pizza;
    var nome = document.getElementById("idNome").value; //fazer para os 3 campos
    var tamanho = Number(document.getElementById("idTamanho").value);
    var preco = Number(document.getElementById("idPreco").value);
    document.getElementById("idPreco").value = "";
    document.getElementById("idNome").value = "";
    pizza.push(nome); //fazer para os 3 campos
    pizza.push(tamanho);
    pizza.push(preco);
    //2 --- calcular preço do cm² está numa função abaixo --calculo
    var precoCm2 = calcularPrecoCm2(preco, tamanho);
    pizza.push(precoCm2);
    pizzas.push(pizza); // quatro dados: nome, tamanho, preço e custo cm²
}
//2- Calcular preço/cm² --calculo
function calcularPrecoCm2(preco, tamanho) {
    var area = 3.14 * Math.pow((tamanho / 2), 2);
    var precoCm2 = preco / area;
    return precoCm2;
}
function exibirRel() {
    //3- Ordenar os dados (do mais barato para o mais caro), com base no Preco/cm²
    pizzas.sort(function (a, b) {
        if (a[3] > b[3]) {
            return 1;
        }
        if (b[3] > a[3]) {
            return -1;
        }
        return 0;
    });
    //4 - Calcular a diferença percentual entre pizzas
    //criar um array percorrendo o pizzas linha a linha calculando diferça percentual do valor por cm² da linha atual com a proxima linha 
    //push na linha
    pizzas[0].push("Melhor CB");
    for (var i = 0; i < pizzas.length - 1; i++) {
        var precoCm2A = pizzas[i][3];
        var precoCm2B = pizzas[i + 1][3];
        var diffPercentual = ((precoCm2B / precoCm2A) - 1) * 100;
        pizzas[i + 1].push(diffPercentual);
    }
    //5 - Exibir o relatório (criar a tabela na tela)
    var tbodyRel = document.getElementById("tboIdLinha");
    for (var i = 0; i < pizzas.length; i++) {
        var linha = montaTr(pizzas[i]);
        tbodyRel.appendChild(linha);
    }
}
//Cria UMA linha (um tr)
function montaTr(pizza) {
    var pizzaTr = document.createElement("tr");
    pizzaTr.classList.add("tdNomeData");
    console.log(pizza[3]);
    console.log(pizza[3].toFixed(2));
    pizzaTr.appendChild(montaTd(pizza[0], "tdNome"));
    pizzaTr.appendChild(montaTd(pizza[1], "tdTamanho"));
    pizzaTr.appendChild(montaTd(pizza[2], "tdPreco"));
    pizzaTr.appendChild(montaTd(pizza[3].toFixed(5), "tdValor"));
    if (isNaN(pizza[4])) {
        pizzaTr.appendChild(montaTd(pizza[4], "tdDiferenca"));
    }
    else {
        pizzaTr.appendChild(montaTd(pizza[4].toFixed(2), "tdDiferenca"));
    }
    return pizzaTr;
}
//Cria UMA coluna (um td)
function montaTd(dado, classe) {
    var pizzaTd = document.createElement("td");
    pizzaTd.classList.add(classe);
    pizzaTd.textContent = dado;
    return pizzaTd;
}
