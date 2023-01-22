
interface ICorredor{
    nome: string; 
    velocidade: string;
    locomover(); 
}

interface IVoador{
    velocidade2: string;
    locomover2(); 
}

class Cavalo implements ICorredor{
    nome: string;
    velocidade: string;
    locomover() {
        //Lógica que faz o cavalo se locomover
        throw new Error("Method not implemented.");
    }

}

class Carro implements ICorredor{
    nome: string;
    velocidade: string;
    locomover() {
        //lógica de locomoção do carro 
        throw new Error("Method not implemented.");
    }

}

class Pessoa implements ICorredor, IVoador{
    velocidade2: string;
    locomover2() {
        throw new Error("Method not implemented.");
    }

    nome: string;
    velocidade: string;
    locomover() {
        //Lógica de locomocao da pessoa
        throw new Error("Method not implemented.");
    }

}

class Corrida{
    /*arrayObjeto : array<objeto>

    competir(arrayObjeto){
        //Lógica de competicão usando os atributos e metodos dos objetos do arrayObjeto
    }
    */
}