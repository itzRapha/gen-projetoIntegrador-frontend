import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { TemaDeleteComponent } from './edit/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

  // se não tiver nenhuma rota, direciona para /entrar
  {path:'', redirectTo:'entrar', pathMatch:'full'},

  // direciona a rota para os componentes em questão
  {path:'entrar', component:EntrarComponent},
  {path:'cadastrar', component:CadastrarComponent},
  
  {path:'inicio', component:InicioComponent},
  {path:'tema', component:TemaComponent},

  {path:'tema-edit/:id', component: TemaEditComponent}, // -> /: <- é como passamos parâmetro no endpoint
  {path:'tema-delete/:id', component: TemaDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
