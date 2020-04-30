import { Injectable } from '@angular/core';
import { UserAccess } from 'src/app/models/useraccess';
import { BehaviorSubject, combineLatest, EMPTY, from, merge, Subject, throwError, of } from 'rxjs';
import { catchError, filter, map, mergeMap, scan, shareReplay, tap, toArray, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SearchfilterService {

  constructor(private http: HttpClient) { }

  private accessUrl='api/accessDetails';

  //get access details

  accessDetailsCombos$ = this.http.get<UserAccess[]>(this.accessUrl)
    .pipe(
      tap(data => console.log('accessCombos', JSON.stringify(data))),
      shareReplay(1),
      catchError(this.handleError)
    );

    private handleError(err: any) {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage: string;
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
      }
      console.error(err);
      return throwError(errorMessage);
    }
  
}
