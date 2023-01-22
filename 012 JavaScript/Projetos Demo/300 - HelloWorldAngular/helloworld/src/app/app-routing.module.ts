import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppDeposito } from "./deposito/app-deposito.component";
import { ExtratoComponent } from "./extrato/extrato.component";


export const routes : Routes = [
    {path: "", redirectTo: "extrato", pathMatch: "full"},
    {path: "extrato", component: ExtratoComponent},
    {path: "deposito", component: AppDeposito}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})
export class AppRoutingModule{

}