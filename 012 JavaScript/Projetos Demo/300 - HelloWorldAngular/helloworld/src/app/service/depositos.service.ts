import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deposito } from 'models/deposito.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepositosService {

  private _listaDepositos: any[] = [];
  private url = "http://localhost:3000/depositos"


  constructor(private httpClient: HttpClient) { }

  public getAllDeposito(): Observable<Deposito[]>{
    return this.httpClient.get<Deposito[]>(this.url)
  }


  public addDeposito(deposito: any): Observable<Deposito>{
    this.carimbar(deposito)
    //this.listaDepositos.push(deposito)
    return this.httpClient.post<Deposito>(this.url, deposito)

  }

  private carimbar(deposito: any){
    deposito.data = new Date()
    //Aqui vao as regras de negocio (limite de horário para deposito, limite de saque, etc)
  }

  public get listaDepositos(): any[] {
    return this._listaDepositos;
  }
  public set listaDepositos(value: any[]) {
    this._listaDepositos = value;
  }
}
