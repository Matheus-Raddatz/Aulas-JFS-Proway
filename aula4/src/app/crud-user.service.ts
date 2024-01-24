import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CrudUserService {

  constructor(private http: HttpClient) { }
  gravar(usuario:any){
    return this.http.post("http://localhost:3000/usuarios", usuario)
  }
}
