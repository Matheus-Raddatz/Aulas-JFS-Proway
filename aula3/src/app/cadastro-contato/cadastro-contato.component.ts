import { Component } from '@angular/core';
import { CrudcontatoService } from '../crudcontato.service';

@Component({
  selector: 'app-cadastro-contato',
  templateUrl: './cadastro-contato.component.html',
  styleUrls: ['./cadastro-contato.component.css']
})
export class CadastroContatoComponent {
  constructor(private service: CrudcontatoService){}

  cadastrar(user:any){
    this.service.gravar(user).subscribe( data => console.log(data) )
  }
}
