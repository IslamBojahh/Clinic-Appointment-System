import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getClinics(): Observable<any> {
    return this.http.get('http://localhost:8000/api/clinic').pipe(
      map(this.extractData));
  }
  postRequest(data): Observable<any> {
   
      console.log(data);
      return this.http.post<any>('http://localhost:8000/api/RequestBook', JSON.stringify(data), httpOptions).pipe(
        tap((data) => console.log(`added request w/ id=${data}`)),
        catchError(this.handleError<any>('AddRequest'))
      );
    
  }



  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

