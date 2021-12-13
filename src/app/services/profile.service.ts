import { Observable } from 'rxjs/internal/Observable';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './../shared/crud.service';
import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends CrudService<Profile> {

  constructor(protected override http:HttpClient) {
    super(http, `${environment.API}Profile`);
  }

}
