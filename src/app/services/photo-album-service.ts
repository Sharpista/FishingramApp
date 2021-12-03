import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { PhotoAlbums } from './../models/photoAlbum';
import { CrudService } from "./crud-service";

export class PhotoAlbumService extends CrudService<PhotoAlbums, number>{

  constructor(protected override _http : HttpClient) {
    super(_http, `${environment.API}/photoAlbums`);
  }
}
