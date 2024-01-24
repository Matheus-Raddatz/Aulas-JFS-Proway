import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:'cadastro',
    component: CadastroComponent
  },
  {
    path:'edicao/:contato',
    component: EdicaoComponent
  },
  {
    path:'consulta',
    component: ConsultaComponent
  },
  {
    path:'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
