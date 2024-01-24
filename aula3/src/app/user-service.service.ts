import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  login(user:any){
    return this.http.post("https://agenda-tph0.onrender.com/usuario/login", user)
  }
}
