import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import IContato from 'src/interfaces/IContato';

@Injectable({
  providedIn: 'root'
})
export class CrudcontatoService {

  constructor(private http: HttpClient) { }

  consultar(){
    let userLogado = JSON.parse(localStorage.getItem('login') || '')
    //let userLogado = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6Ikpvc2UiLCJlbWFpbCI6Impvc2VAZ21haWwuY29tIiwicGVyZmlsIjoiQURNSU4iLCJpYXQiOjE2ODcwMjA3MzR9.IE-C5IqeKKvwTDdvTz24QbeWS87t924_Os98Owgtx8U"
    let headers = new HttpHeaders()
    headers = headers.set( 'x-access-token', userLogado.token )
    //return this.http.get<[IContato]>( "https://agenda-tph0.onrender.com/contato", { headers } )
    return this.http.get<[IContato]>("http://localhost:3000/contatos", { headers } )
  }
  gravar(contato:any){
    // return this.http.post("https://agenda-tph0.onrender.com/contato", contato)
    return this.http.post("http://localhost:3000/contatos", contato)
  }
  editar(contato:any){

  }
  excluir(id:any){

  }
}
