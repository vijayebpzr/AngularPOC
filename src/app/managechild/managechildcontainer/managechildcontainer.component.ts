import { Component, OnInit } from '@angular/core';

import { ManagechildserviceService } from './../managechildservice.service';
import { Subject, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Child } from './../../models/child';

@Component({
  selector: 'app-managechildcontainer',
  templateUrl: './managechildcontainer.component.html',
  styleUrls: ['./managechildcontainer.component.sass']
})
export class ManagechildcontainerComponent implements OnInit {

  constructor(private childService:ManagechildserviceService) { }

  childdata:any;

  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  // Products with their categories
  children$ = this.childService.childrenWithDescription$
    .pipe(
      
      catchError(err => {
        this.errorMessageSubject.next(err);
        
        return EMPTY;
      }));

  ngOnInit() {

//   this.childdata= this.childService.getChild();

  }

}
