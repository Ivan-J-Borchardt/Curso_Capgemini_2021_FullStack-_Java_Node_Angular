import { Pessoa } from "./pessoa";
export class PessoaFisica extends Pessoa {
    //Método Construtor
    constructor(cpf, rg, dataNasc, nomePessoa, enderecoPessoa, tel) {
        super(nomePessoa, enderecoPessoa, tel);
        this.cpf = cpf;
        this.rg = rg;
        this.dataNasc = dataNasc;
    }
    //Métodos Assessor e Mutattor
    get dataNasc() {
        return this._dataNasc;
    }
    set dataNasc(value) {
        this._dataNasc = value;
    }
    get rg() {
        return this._rg;
    }
    set rg(value) {
        this._rg = value;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(value) {
        this._cpf = value;
    }
    telefonar(tel) {
        super.telefone = tel;
    }
}
