import { Component,  EventEmitter,  Output } from "@angular/core";
import { Router } from "@angular/router";
import { DepositosService } from "../service/depositos.service";


@Component({
  selector: "app-deposito",
  templateUrl: "./app-deposito.component.html",
  styleUrls : ["./app-deposito.component.scss"]
})
export class AppDeposito{

    //@Output() aoDepositar = new EventEmitter<any>()

    conta : number = 0;
    valor : number = 0;

    constructor(private service : DepositosService, private router: Router){}


    public depositar(){
      console.log("acinou deposito...");
      console.log("conta: " + this.conta);
      console.log("valor: " + this.valor);

      const deposito = {valor: this.valor, conta: this.conta}

      //this.aoDepositar.emit(deposito)
      this.service.addDeposito(deposito).subscribe(resultado =>{
        console.log(resultado)
        this.limparTela()
        
        this.router.navigateByUrl("extrato")

      }, error =>{
        console.error(error)
      })

    }

    private limparTela(){
      this.conta = 0;
      this.valor = 0;
    }

    public teste(){
      console.log("Clicou no botao teste");
    }

    public desfocou(event : FocusEvent){
      console.log("Saiu do campo conta...");
      console.log(event);
      
    }

    public mouseOver(event : MouseEvent){
      console.log("passou o mouse...")
      console.log(event)
    }

}
