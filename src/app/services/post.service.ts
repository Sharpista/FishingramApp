import { Observable } from 'rxjs/internal/Observable';
;
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';
import { CrudService } from '../shared/crud.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService extends CrudService<Post> {

  constructor(protected override http : HttpClient) {
    super(http, `${environment.API}Post`)
  }

  postUpload(userId:number, file : any): Observable<Post>{

    const fileToUpload = file[0] as File;
    const formData = new FormData();
    formData.append('file', fileToUpload);

    return this.http.post<Post>(`${environment.API}Post/upload-image/${userId}`, formData).pipe(take(1))
  }
  getAllPostFromUser(id:number){
    return this.http.get<Post[]>(`${environment.API}Post/allPostFromUser/${id}`).pipe(take(1))
  }

}
