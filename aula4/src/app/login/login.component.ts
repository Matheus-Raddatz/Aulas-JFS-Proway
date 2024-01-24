import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service: UserServiceService){}

  login(user:any){
    this.service.login(user).subscribe( data => { localStorage.setItem("login", JSON.stringify(data)) })
  }
}
