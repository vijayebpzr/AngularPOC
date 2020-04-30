import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject, EMPTY } from 'rxjs';
import { Child } from './../../models/child';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-childlistpresenter',
  templateUrl: './childlistpresenter.component.html',
  styleUrls: ['./childlistpresenter.component.sass']
})
export class ChildlistpresenterComponent implements OnInit {

  constructor() { }

  
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();
  @Input() childlist:Observable<Child>;
  rowData:Observable<Child>;

  columnDefs = [
    {headerName: 'ChildName', field: 'childname' },
    {headerName: 'SdChildId', field: 'sdchildid' },
    {headerName: 'Project', field: 'projectDesc'}
];

ngOnInit() {

  
}

ngOnChanges(changes){

  console.log(this.childlist);
  this.rowData=this.childlist;

}




}
