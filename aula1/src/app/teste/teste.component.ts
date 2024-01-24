import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent {
  nome:string = "José da Silva"
  cumprimento:string = "seja bem vindo à primeira aula de angular"
}
