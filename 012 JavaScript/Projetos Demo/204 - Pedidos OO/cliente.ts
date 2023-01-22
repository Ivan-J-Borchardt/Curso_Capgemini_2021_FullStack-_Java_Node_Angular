export class Cliente{
    private _nome : string; 
    private _cpf  : string;
    private _rg   : string;
    private _tel  : string; 

    
    constructor(nome: string, cpf: string, rg: string, tel: string){
       this.nome = nome;
       this.cpf = cpf; 
       this.rg = rg;
       this.tel = tel 
    }

    public get nome() : string {
        return this._nome;
    }

    public get cpf() : string {
        return this._cpf;
    }

    public get rg() : string {
        return this._rg;
    }
    
    public get tel() : string {
        return this._tel;
    }
    
    public set nome(nome : string) {
        this._nome = nome;
    }
    
    public set cpf(cpf : string) {
        this._cpf = cpf;
    }
    
    public set rg(rg : string) {
        this._rg = rg;
    }

    public set tel(tel : string) {
        this._tel = tel;
    }
    
        

}