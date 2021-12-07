import { Observable } from 'rxjs/internal/Observable';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  mostrarMenuEmitter = new EventEmitter<boolean>();
   API = `${environment.API}Auth/login`;
  constructor(private _http: HttpClient) {
  }
  login(login:Login) : Observable<any>{
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'response' as 'body'
    }
    return this._http.post<Login>(this.API, login, options)
  }
  logout(){
    localStorage.removeItem("jwt");
  }
}
