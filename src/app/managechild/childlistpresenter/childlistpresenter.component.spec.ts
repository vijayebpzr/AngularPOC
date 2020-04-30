import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildlistpresenterComponent } from './childlistpresenter.component';

describe('ChildlistpresenterComponent', () => {
  let component: ChildlistpresenterComponent;
  let fixture: ComponentFixture<ChildlistpresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildlistpresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildlistpresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
