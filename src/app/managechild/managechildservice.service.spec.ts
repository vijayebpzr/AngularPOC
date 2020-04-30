import { TestBed } from '@angular/core/testing';

import { ManagechildserviceService } from './managechildservice.service';

describe('ManagechildserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagechildserviceService = TestBed.get(ManagechildserviceService);
    expect(service).toBeTruthy();
  });
});
