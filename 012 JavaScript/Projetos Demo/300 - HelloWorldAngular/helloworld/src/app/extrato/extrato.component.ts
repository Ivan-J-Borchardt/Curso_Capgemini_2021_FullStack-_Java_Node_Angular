import { Component, Input, OnInit } from '@angular/core';
import { Deposito } from 'models/deposito.models';
import { DepositosService } from '../service/depositos.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  //@Input() depositos : any[] = [];
  depositos : any[] = [];

  livro: any = {
    titulo: "Aprenda JavaScript em 20 dias", 
    rating: 13.56765, 
    paginas: 250, 
    preco: 35.70, 
    dataLanc: new Date(2021, 8, 15)
  }

  constructor(private service: DepositosService) { }

  ngOnInit(): void {
    //this.depositos = this.service.listaDepositos
    this.service.getAllDeposito().subscribe((depositosPP: Deposito[]) => {
      console.table(depositosPP)
      this.depositos = depositosPP
    })


  }

}
