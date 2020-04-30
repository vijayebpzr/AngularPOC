import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagechildcontainerComponent } from './managechildcontainer.component';

describe('ManagechildcontainerComponent', () => {
  let component: ManagechildcontainerComponent;
  let fixture: ComponentFixture<ManagechildcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagechildcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagechildcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
