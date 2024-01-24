import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import IContato from '../interfaces/interface';
interface Contatos {
  nome: string,
  email: string,
  telefone: string
}
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {
  lista:IContato[] = []
  constructor(private service: CrudService){
    this.consultar()
  }

  consultar(){
    this.service.consultar().subscribe(dados => {
      console.log(dados)
      this.lista = dados})
  }
    
  excluir(contato:any) {
    console.log(contato)
    this.service.excluir(contato).subscribe(() => console.log("Excluído com sucesso!!"))
    location.reload()
  }
}
