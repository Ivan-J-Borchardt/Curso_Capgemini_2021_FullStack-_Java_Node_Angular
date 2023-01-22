export class Pessoa{

    //Atributos 
    private _nome    : string;
    private _cpf     : string; 
    private _idade   : number; 
    private _endereco: string; 
    //Modificadores de Acesso --- public, private, protected

    //método Construtor
    public constructor(nome: string, cpf:string){
        this.nome = nome 
        this.cpf = cpf 
    }

    //Métodos de acesso (getter e setter)
    public get nome(){
        if (this._nome == "") {
            return "Nome nao atribuido"
        }
        return this._nome
    }

    public set nome(nome: string){
        if (nome != "") {
            this._nome = nome
        }
    }

    public get cpf(){
        return this._cpf
    }

    public set cpf(cpf: string){
        if (this.validarCpf(cpf)) {
            this._cpf = cpf 
        }
    }

    //Métodos da classe - Comportamentos da classe 
    public cumprimentar(nome:string){
        console.log(`Olá ${nome} meu nome é ${this._nome}`);
    }

    private validarCpf(cpf:string){
        if (cpf == "") {
           return false 
        }
        return true
    }

}