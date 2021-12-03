import { LoginComponent } from './login/login/login.component';
import { FormCadastroProfileComponent } from './profile/form-cadastro-profile/form-cadastro-profile.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './timeline/timeline/timeline.component';

const routes: Routes = [
  {path:'cadastrarUsuario', component:FormCadastroProfileComponent},
  {path:'login', component:LoginComponent},
  {path:'timeline', component:TimelineComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
