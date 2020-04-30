import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagechildcontainerComponent } from './managechild/managechildcontainer/managechildcontainer.component';
import { ChildlistpresenterComponent } from './managechild/childlistpresenter/childlistpresenter.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './app-data';
import { SearchfilterpresenterComponent } from './managechild/searchfilterpresenter/searchfilterpresenter.component';


@NgModule({
  declarations: [
    AppComponent,
    ManagechildcontainerComponent,
    ChildlistpresenterComponent,
    SearchfilterpresenterComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
