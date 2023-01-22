import { Endereco } from "./endereco";
import { Pessoa } from "./pessoa";

export class PessoaFisica extends Pessoa{

    private _cpf: string; 
    private _rg: string;
    private _dataNasc: string; 

    //Método Construtor
    constructor(cpf: string, rg: string, dataNasc: string, nomePessoa: string, enderecoPessoa: Endereco, tel: string){
        super(nomePessoa, enderecoPessoa, tel); 

        this.cpf = cpf;
        this.rg = rg;
        this.dataNasc = dataNasc; 
    }

    //Métodos Assessor e Mutattor
    public get dataNasc(): string {
        return this._dataNasc;
    }
    public set dataNasc(value: string) {
        this._dataNasc = value;
    }

    public get rg(): string {
        return this._rg;
    }
    public set rg(value: string) {
        this._rg = value;
    }
    public get cpf(): string {
        return this._cpf;
    }
    public set cpf(value: string) {
        this._cpf = value;
    }

    public telefonar(tel: string){
        this.telefone = tel
    }

}