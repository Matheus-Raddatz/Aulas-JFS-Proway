import { Component } from '@angular/core';
import { CrudUserService } from '../crud-user.service';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css']
})
export class CadastroUserComponent {
  constructor(private service: CrudUserService){}

  cadastrar(user:any){
    this.service.gravar(user).subscribe( data => console.log(data) )
  }
}
