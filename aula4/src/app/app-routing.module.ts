import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';
import { ConsultaContatoComponent } from './consulta-contato/consulta-contato.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { AuthLoginService } from './auth-login.service';
import { ExcluirComponent } from './excluir/excluir.component';

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
    component: CadastroContatoComponent,
    canActivate:[AuthLoginService]
  },
  {
    path: "consultaContato",
    component: ConsultaContatoComponent
  },
  {
    path: "edicao/:idcontato",
    component: EdicaoComponent
  },
  {
    path: "excluir/:idcontato",
    component: ExcluirComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
