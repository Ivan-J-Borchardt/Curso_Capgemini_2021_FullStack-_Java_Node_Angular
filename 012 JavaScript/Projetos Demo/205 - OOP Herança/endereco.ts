export class Endereco{
    private _estado: string
    private _cidade: string 
    private _bairro: string 
    private _rua: string
    private _numero: number
    private _cep: string 

    constructor(estado: string, cidade:string, bairro: string, rua: string, numero: number, cep: string){
        this.estado = estado;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
        this.cep = cep
    }

    public get cep(): string {
        return this._cep
    }
    public set cep(value: string) {
        this._cep = value
    }

    public get numero(): number {
        return this._numero
    }
    public set numero(value: number) {
        this._numero = value
    }
    public get rua(): string {
        return this._rua
    }
    public set rua(value: string) {
        this._rua = value
    }

    public get bairro(): string {
        return this._bairro
    }
    public set bairro(value: string) {
        this._bairro = value
    }

    public get cidade(): string {
        return this._cidade
    }
    public set cidade(value: string) {
        this._cidade = value
    }
    public get estado(): string {
        return this._estado
    }
    public set estado(value: string) {
        this._estado = value
    }
    
}