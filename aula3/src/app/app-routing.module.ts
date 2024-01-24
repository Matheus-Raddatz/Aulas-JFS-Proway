import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';
import { ConsultaContatoComponent } from './consulta-contato/consulta-contato.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "cadastroUser",
    component: CadastroUserComponent
  },
  {
    path: "cadastroContato",
    component: CadastroContatoComponent
  },
  {
    path: "consultaContato",
    component: ConsultaContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
