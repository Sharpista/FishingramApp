import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PhotoAlbums } from '../models/photoAlbum';
import { CrudService } from '../shared/crud.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoAlbumService extends CrudService<PhotoAlbums> {

  constructor(protected override http : HttpClient, ) {
    super(http, `${environment.API}PhotoAlbum`)
  }

  getAllPostFromUser(id:number){
    return this.http.get<PhotoAlbums[]>(`${environment.API}PhotoAlbum/allPostsFromUser/${id}`).pipe(take(1))
  }
}
