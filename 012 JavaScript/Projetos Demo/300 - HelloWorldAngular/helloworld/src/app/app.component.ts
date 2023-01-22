import { Component } from '@angular/core';


@Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']})
export class AppComponent {
  title = 'helloworld';

  //conta: number = 0;
  //valor: number = 0;

  //depositosAPP : any[] = [];

  constructor(){

  }

  //public depositar($event: any){
  //  console.log($event);
    //this.conta = $event.conta;
    //this.valor = $event.valor;

    //const deposito = {valor: $event.valor, conta: $event.conta, data: new Date()}
    //const deposito = {...$event, data: new Date()}
    //this.depositosAPP.push(deposito)
    //this.service.addDeposito($event)

 // }
}
