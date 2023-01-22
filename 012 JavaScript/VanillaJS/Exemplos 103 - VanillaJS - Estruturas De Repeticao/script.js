/********* Web Technology Development Training **************************************************
 * Instructor  : Ivan J. Borchardt - linkedin.com/in/ivan-borchardt/
 *                                 - github.com/Ivan-J-Borchardt
 * Description : Loopings
 * Date        : 01.2021 
 ************************************************************************************************/


var cont = 0; 
function executarFor() {

    //usado para aplicações onde sabemos exatamente a qtd de vezes que o código é executado 
    for (let index = 0; index < 10; index++) {
        console.log("for " + index);
        
    }

}

function executarWhile(){
    var index = 11;
     
    //Esta estrutura tem o mesmo efeito da estrutura FOR acima
    //usado quando não sabemos quantas vezes o código deverá ser executado
    while (index < 10){
        console.log("while " + index);
        index++; 
    }
}

function executarDoWhile(){
    var index = 0;
    /*
    *   Estrutura de repetição semelhante ao WHILE, com a única diferença que no DO-WHILE o teste da condição de parada 
	*é executado após executar o bloco de código contido na estrutura de repetição. No WHILE, por outro lado, o teste 
    *é executado antes de executar o blóco lógico contido na estrutura. 
    */
    do {
        console.log("do while " + index);
        index++; 
    } while (index < 10);
}

function executarForPassoDif(){
    
    //Passo da estrutura de repetição
	for (let i = 500; i > -1; i = i - 10) {
		console.log("For c/ Passo 10 " + i);
    }
     
}

//Break vs. Continue
//====================

function testarBreakContinueFor(){
		/*
		 * Imprimindo os números de 1 à 10 menos o 7
		 */
		for (let i = 0; i < 10; i++) {
			
			if (i == 7) {
				continue;  
			}
			
			console.log("continue - for " + i);
		}
		
		/*
		 * Interrompendo o loop na sexta iteração 
		 */
		for (let i = 0; i < 10; i++) {
		
			if (i == 6) {
				break;
			}
			
			console.log("break - for " + i);
		}
}

function testarBreakContinueWhile(){
		/*
		 * 
		 */
		let i = 0;
		while (i < 10) {
			
			if (i == 7) {
				i++;
				continue;  
			}
			
			console.log("continue While " + i);
			i++; 
		}
		
		/*
		 * 
		 */
		i = 0;
		while (i < 10) {
			
			if (i == 6) {
				break;  
			}
			
			console.log("break While " + i);
			i++; 
		}
}