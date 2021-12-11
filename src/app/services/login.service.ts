import { Observable } from 'rxjs/internal/Observable';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Login } from '../models/login';

const httpOptions = {
  headers : new HttpHeaders({'Content':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API = `${environment.API}Auth/auth`;
  constructor(private _http: HttpClient) {
  }
  login(login:Login) : Observable<any>{

    return this._http.post<Login>(this.API, login, httpOptions)
  }
  logout(){
    localStorage.removeItem("jwt");
  }
}
