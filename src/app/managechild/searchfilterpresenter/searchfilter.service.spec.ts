import { TestBed } from '@angular/core/testing';

import { SearchfilterService } from './searchfilter.service';

describe('SearchfilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchfilterService = TestBed.get(SearchfilterService);
    expect(service).toBeTruthy();
  });
});
