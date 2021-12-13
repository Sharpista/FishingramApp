import { authInterceptorProviders } from './helpers/auth.interceptor';
import { TokenStorageService } from './services/token-storage.service';
import { LoginService } from './services/login.service';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { FeedComponent } from './views/feed/feed.component';
import { CriarPostComponent } from './views/criar-post/criar-post.component';
import { MeuPerfilComponent } from './views/meu-perfil/meu-perfil.component';
import { AlbumFotosComponent } from './views/album-fotos/album-fotos.component';

export function tokenGetter(){
  return localStorage.getItem('jwt');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    FeedComponent,
    CriarPostComponent,
    MeuPerfilComponent,
    AlbumFotosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config:{
        tokenGetter : tokenGetter,
        allowedDomains : ["localhost:5001"],
        disallowedRoutes:[]

      }
    })

  ],
  providers:[LoginService, TokenStorageService,authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule { }
