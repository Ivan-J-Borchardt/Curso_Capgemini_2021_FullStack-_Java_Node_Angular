import { Endereco } from "./endereco";

export class Pessoa{
    private _nome: string;
    private _endereco: Endereco; 
    private _telefone: string; 



    //Método Construtor 
    constructor(nome: string, endereco: Endereco, telefone: string){
        this.nome = nome; 
        this.endereco = endereco;
        this.telefone = telefone;
    }

    //Método Assessor 
    public get endereco(): Endereco {
        return this._endereco;
    }

    //Método Mutattor 
    public set endereco(value: Endereco) {
        this._endereco = value;
    }

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public get telefone(): string {
        return this._telefone;
    }
    protected set telefone(value: string) {
        this._telefone = value;
    }


    //Método Worker
    public calculaIdade(): number{
        return 15
    }

} 