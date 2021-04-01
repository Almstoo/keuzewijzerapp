import { TestBed } from '@angular/core/testing';

import { ToolsDataService } from './tools-data.service';

describe('ToolsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToolsDataService = TestBed.get(ToolsDataService);
    expect(service).toBeTruthy();
  });
});
