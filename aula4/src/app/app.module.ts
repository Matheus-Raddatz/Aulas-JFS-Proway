import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';
import { ConsultaContatoComponent } from './consulta-contato/consulta-contato.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EdicaoComponent } from './edicao/edicao.component';
import { ExcluirComponent } from './excluir/excluir.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroUserComponent,
    CadastroContatoComponent,
    ConsultaContatoComponent,
    EdicaoComponent,
    ExcluirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
