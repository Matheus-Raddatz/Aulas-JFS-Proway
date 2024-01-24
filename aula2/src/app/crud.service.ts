import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IContato from './interfaces/interface';
interface Contatos {
  nome: string,
  email: string,
  telefone: string
}
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  title = 'aula1.1';
  i: number = 0
  lista: Contatos[] = []
  contatos: Contatos[] = []

  constructor(private http: HttpClient) {}

  salvar(contato: IContato) {
    console.log("op"+contato)
    return this.http.post<IContato>('http://localhost:3000/contatos', contato)
  }

  excluir(contato: any) {
    console.log("opa " + contato)
    return this.http.delete(`http://localhost:3000/contatos/${contato}`)
  }

  // checar(contato:Contatos): boolean {
  //   let pos = this.lista.indexOf(contato)
  //   if (contato.email === this.lista[pos].email) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  consultar() {
    return this.http.get<[IContato]>('http://localhost:3000/contatos')
  }
}
