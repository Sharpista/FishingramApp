import { AlbumFotosComponent } from './views/album-fotos/album-fotos.component';
import { MeuPerfilComponent } from './views/meu-perfil/meu-perfil.component';
import { HomeComponent } from './views/home/home.component';
import { FeedComponent } from './views/feed/feed.component';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'cadastro', component:CadastroComponent},
  {path:'meu-perfil', component: MeuPerfilComponent},
  {path:'feed', component:FeedComponent},
  {path:'album-fotos', component:AlbumFotosComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
