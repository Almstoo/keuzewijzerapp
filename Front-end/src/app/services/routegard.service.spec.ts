import { TestBed } from '@angular/core/testing';

import { RoutegardService } from './routegard.service';

describe('RoutegardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutegardService = TestBed.get(RoutegardService);
    expect(service).toBeTruthy();
  });
});
