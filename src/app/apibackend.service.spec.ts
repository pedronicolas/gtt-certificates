import { TestBed } from '@angular/core/testing';

import { ApibackendService } from './apibackend.service';

describe('ApibackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApibackendService = TestBed.get(ApibackendService);
    expect(service).toBeTruthy();
  });
});
