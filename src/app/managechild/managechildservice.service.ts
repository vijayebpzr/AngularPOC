import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { Child } from './../models/child';

import { BehaviorSubject, combineLatest, EMPTY, from, merge, Subject, throwError, of } from 'rxjs';
import { catchError, filter, map, mergeMap, scan, shareReplay, tap, toArray, switchMap } from 'rxjs/operators';
import { SearchfilterService } from './searchfilterpresenter/searchfilter.service';


@Injectable({
  providedIn: 'root'
})
export class ManagechildserviceService {

  constructor(private http: HttpClient, private accessService:SearchfilterService) { }

  
  private childrenUrl='api/children';
  private masterUrl='api/masters';

  getChild(){
    return this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json');
  }

  // All children observable
  children$ = this.http.get<Child[]>(this.childrenUrl)
    .pipe(
      tap(data => console.log('Children', JSON.stringify(data))),
      catchError(this.handleError)
    );

    // Combine products with categories
  // Map to the revised shape.
  childrenWithDescription$ = combineLatest([
    this.children$,
    this.accessService.accessDetailsCombos$
  ]).pipe(
    map(([children, accessDetails]) =>
      children.map(child => ({
        ...child,
        projectDesc: accessDetails.find(c => child.projectcode === c.projectcode).projectdescription,
        communityDesc: accessDetails.find(c => child.communityCode === c.communitycode).communitydescription,
      }) as Child)
    ),
    tap(data => console.log('finalList',JSON.stringify(data))),
    
    catchError(this.handleError)
  );

    private handleError(err: any) {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      console.log(err);
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
