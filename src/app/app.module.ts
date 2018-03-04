import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioDetalhesComponent } from './funcionario-detalhes/funcionario-detalhes.component';
import { FuncionarioNovoComponent } from './funcionario-novo/funcionario-novo.component';
import { FuncionarioEdicaoComponent } from './funcionario-edicao/funcionario-edicao.component';

const appRoutes: Routes = [
  {
    path: 'funcionario',
    component: FuncionarioComponent,
    data: { title: 'Lista de Funcionários' }
  },
  {
    path: 'funcionario-detalhe/:id',
    component: FuncionarioDetalhesComponent,
    data: { title: 'Funcionário Detalhes' }
  },
  {
    path: 'novo-funcionario',
    component: FuncionarioNovoComponent,
    data: { title: 'Novo funcionário' }
  },
  {
    path: 'funcionario-edicao/:id',
    component: FuncionarioEdicaoComponent,
    data: { title: 'Funcionário Edição' }
  },
  { 
    path: '',
    redirectTo: '/funcionario',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent,
    FuncionarioDetalhesComponent,
    FuncionarioNovoComponent,
    FuncionarioEdicaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
