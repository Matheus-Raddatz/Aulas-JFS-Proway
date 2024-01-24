import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import IContato from '../interfaces/interface';
interface Contatos {
  nome: string,
  email: string,
  telefone: string
}
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  title = 'aula1.1';
  i:number = 0
  lista:Contatos[] = []

  constructor(private service: CrudService){}

  salvar(dados:IContato) {
    this.service.salvar(dados).subscribe(data => console.log(data))
  }

  // checar(contato:Contatos) {
  //   this.service.checar(contato)
  // }
}
