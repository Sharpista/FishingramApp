import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Post } from "../models/post";
import { CrudService } from "./crud-service";

export class PostService extends CrudService<Post,number>{

  /**
   *
   */
  constructor(protected override _http: HttpClient) {
    super(_http, `${environment.API}/post`);
  }
}
