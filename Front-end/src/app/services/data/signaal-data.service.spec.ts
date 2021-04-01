import { TestBed } from '@angular/core/testing';

import { SignaalDataService } from './signaal-data.service';

describe('SignaalDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignaalDataService = TestBed.get(SignaalDataService);
    expect(service).toBeTruthy();
  });
});
