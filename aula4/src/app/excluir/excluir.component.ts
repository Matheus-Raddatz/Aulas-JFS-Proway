import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudcontatoService } from '../crudcontato.service';
import IContato from 'src/interfaces/IContato';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent {
  idContato: any = ''
  contato: IContato = { nome: '', email: '', fone: '', endereco: ''}
  constructor(private route: ActivatedRoute, private service: CrudcontatoService){
    this.idContato =  this.route.snapshot.paramMap.get("idcontato")
    this.service.consultarPorId(this.idContato).subscribe(data => this.contato = data)
  }
  excluir(contato:any) {
    console.log(contato)
    this.service.excluir(contato).subscribe(() => console.log("Excluído com sucesso!!"))
    location.reload()
  }
}
