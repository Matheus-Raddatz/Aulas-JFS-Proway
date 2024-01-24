import { Component } from '@angular/core';

interface Contatos {
  nome: string,
  email: string,
  telefone: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula1.1';
  i:number = 0
  lista:Contatos[] = []

  salvar(dados:any) {
    this.lista.push(dados)
  }
  
  excluir(contato:Contatos) {
    let pos = this.lista.indexOf(contato)
    this.lista.splice(pos, 1)
  }

  checar(contato:Contatos) {
    let pos = this.lista.indexOf(contato)
    if (contato.email === this.lista[pos].email) {
      alert("Email já utilizado")
    }
  }
}
