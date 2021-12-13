import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

const token = {
  token : localStorage.getItem('auth-user')
}
const httpOptions = {
  headers : new HttpHeaders({'Content':'application/json'}),
}
export abstract class CrudService<T> {



  constructor(protected http: HttpClient,  private api_url:string) { }

  getAll(): Observable<any[]> {
    return this.http.get<T[]>(this.api_url, httpOptions).pipe(take(1));
  }

  get(id: any): Observable<any> {
    return this.http.get(`${this.api_url}/${id}`,httpOptions).pipe(take(1));
  }

  create(data: any): Observable<any> {
    return this.http.post(this.api_url, data, httpOptions).pipe(take(1));
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.api_url}/${id}`, data, httpOptions).pipe(take(1));
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.api_url}/${id}`, httpOptions).pipe(take(1));
  }


}
