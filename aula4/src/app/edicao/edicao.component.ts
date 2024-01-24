import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudcontatoService } from '../crudcontato.service';
import IContato from 'src/interfaces/IContato';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent {
  idContato: any = ''
  contato: IContato = { nome: '', email: '', fone: '', endereco: ''}
  constructor(private route: ActivatedRoute, private service: CrudcontatoService){
    this.idContato =  this.route.snapshot.paramMap.get("idcontato")
    this.service.consultarPorId(this.idContato).subscribe(data => this.contato = data)
  }
  salvar(id:any){
    console.log(id);
    this.service.editar(this.contato).subscribe(data => console.log(data))
  }
}
