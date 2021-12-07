import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PhotoAlbums } from '../models/photoAlbum';
import { CrudService } from '../shared/crud.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoAlbumServiceService extends CrudService<PhotoAlbums>  {

  constructor(protected override http:HttpClient) {
    super(http, `${environment.API}PhotoAlbums`)
   }
}
