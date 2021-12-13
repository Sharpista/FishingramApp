import { Profile } from './../models/profile';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

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
  login(profile:Profile) : Observable<any>{

    return this._http.post<Profile>(this.API, profile, httpOptions)
  }
  logout(){
    localStorage.removeItem("jwt");
  }
}
