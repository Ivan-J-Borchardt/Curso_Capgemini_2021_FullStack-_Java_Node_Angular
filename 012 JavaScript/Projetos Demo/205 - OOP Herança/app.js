import { Endereco } from "./endereco";
import { PessoaFisica } from "./pessoaFisica";
let endereco = new Endereco("Santa Catarina", "Blumenau", "Centro", "7 de setembre", 1232, "89108-099");
let pessoaFisica = new PessoaFisica("000.000.000-12", "0.000.000", "2021.01.01", "Fulano", endereco, "(47)9999-9999");
console.log(pessoaFisica.nome);
console.log(pessoaFisica.calculaIdade());
pessoaFisica.telefonar("555555-55555");
console.log(pessoaFisica.telefone);
