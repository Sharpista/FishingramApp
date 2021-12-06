import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export abstract class CrudService<T> {


  constructor(protected http: HttpClient,  private api_url:string) { }

  getAll(): Observable<any[]> {
    return this.http.get<T[]>(this.api_url);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${this.api_url}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.api_url, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.api_url}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.api_url}/${id}`);
  }


}
