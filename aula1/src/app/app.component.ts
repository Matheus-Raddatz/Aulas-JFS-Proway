import { Component, ViewChild } from '@angular/core';
interface Contatos {
  nome: string,
  email: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  rotulo:string = "mostrar"
  escondido:boolean = false

  title = 'aula1';
  msg:string = "Olá pessoal!!"

  nome:string = "Matheus Raddatz"

  lista:Contatos[] = [
    {
      nome:"José",
      email:"jose@gmail.com"
    },
    {
      nome:"Maria",
      email:"maria@gmail.com"
    },
    {
      nome:"Pedro",
      email:"pedro@gmail.com"
    }
  ]

  salvar(dados:any) {
    this.lista.push(dados)
  }

  adeus() {
    this.msg = "Adeus..."
  }

  esconder() {
    if(!this.escondido) {
      this.rotulo = "esconder"
      this.escondido = true
    } else {
      this.rotulo = "mostrar"
      this.escondido = false
    }
  }
}
