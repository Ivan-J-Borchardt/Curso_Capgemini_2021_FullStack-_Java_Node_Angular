export class ItemPedido{
    private _cod: number;
    private _descricao: string;
    private _valor: number; 
    private _qtd: number; 

    constructor(cod?: number, descricao?: string, valor?: number, qtd?: number){
        this.cod = cod;
        this.descricao = descricao;
        this.valor = valor;
        this.qtd = qtd; 
    }

    public get cod(): number {
        return this._cod;
    }
    public set cod(value: number) {
        this._cod = value;
    }

    public get descricao(): string {
        return this._descricao;
    }
    public set descricao(value: string) {
        this._descricao = value;
    }

    public get valor(): number {
        return this._valor;
    }
    public set valor(value: number) {
        this._valor = value;
    }

    public get qtd(): number {
        return this._qtd;
    }
    public set qtd(value: number) {
        this._qtd = value;
    }


}