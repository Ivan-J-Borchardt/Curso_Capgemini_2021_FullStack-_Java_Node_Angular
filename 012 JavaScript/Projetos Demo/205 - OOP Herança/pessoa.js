export class Pessoa {
    //Método Construtor 
    constructor(nome, endereco, telefone) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
    }
    //Método Assessor 
    get endereco() {
        return this._endereco;
    }
    //Método Mutattor 
    set endereco(value) {
        this._endereco = value;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get telefone() {
        return this._telefone;
    }
    set telefone(value) {
        this._telefone = value;
    }
    //Método Worker
    calculaIdade() {
        return 15;
    }
}
