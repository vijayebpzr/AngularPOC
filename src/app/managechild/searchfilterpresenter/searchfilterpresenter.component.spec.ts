import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfilterpresenterComponent } from './searchfilterpresenter.component';

describe('SearchfilterpresenterComponent', () => {
  let component: SearchfilterpresenterComponent;
  let fixture: ComponentFixture<SearchfilterpresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchfilterpresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchfilterpresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
