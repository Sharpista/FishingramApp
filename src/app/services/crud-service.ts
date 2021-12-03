import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { CrudOperations } from '../interfaces/crud-operations';

export abstract class CrudService<T, ID> implements CrudOperations<T, ID>{
  /**
   *
   */
  constructor(
    protected _http: HttpClient, protected _apiUrl: string
  ) { }
  save(t: T): Observable<T> {
    return this._http.post<T>(this._apiUrl, t).pipe(take(1));
  }
  update(id: ID, t: T): Observable<T> {
    return this._http.put<T>(`${this._apiUrl}/${id}`, t, {}).pipe(take(1));
  }
  find(id: ID): Observable<T> {
    return this._http.get<T>(`${this._apiUrl}/${id}`).pipe(take(1));
  }
  findAll(): Observable<T[]> {
    return this._http.get<T[]>(this._apiUrl);
  }
  delete(id: ID): Observable<any> {

    return this._http.delete<T>(`${this._apiUrl}/${id}`);
  }

}
