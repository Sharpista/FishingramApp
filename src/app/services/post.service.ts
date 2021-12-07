;
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';
import { CrudService } from '../shared/crud.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends CrudService<Post> {

  constructor(protected override http : HttpClient) {
    super(http, `${environment.API}Post`)
  }
}
