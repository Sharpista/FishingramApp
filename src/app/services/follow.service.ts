import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CrudService } from '../shared/crud.service';

@Injectable({
  providedIn: 'root'
})
export class FollowService  {
  API = `${environment.API}Follow`;
  constructor(private http : HttpClient) { }

  FollowUser(idSeguido:any, idSeguidor:any){

  }
}
