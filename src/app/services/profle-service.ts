import { Profile } from './../models/profile';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CrudService } from "./crud-service";

export class ProfileService extends CrudService<Profile, number>{

  /**
   *
   */
  constructor(protected override _http: HttpClient) {
    super(_http, `${environment.API}/profile`);
  }
}
