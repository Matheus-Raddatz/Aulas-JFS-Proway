import { Component } from '@angular/core';
import { CrudcontatoService } from "../crudcontato.service";
import IContato from "../../interfaces/IContato";
@Component({
  selector: 'app-consulta-contato',
  templateUrl: './consulta-contato.component.html',
  styleUrls: ['./consulta-contato.component.css']
})
export class ConsultaContatoComponent {
  contatos:IContato[] = []
  constructor(private service: CrudcontatoService){
    this.consultar()
  }

  consultar(){
    this.service.consultar().subscribe( data => { this.contatos = data } )
  }

  excluir(contato:any) {
    console.log(contato)
    this.service.excluir(contato).subscribe(() => console.log("Excluído com sucesso!!"))
    location.reload()
  }
}