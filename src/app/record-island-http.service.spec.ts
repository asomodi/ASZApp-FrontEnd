import { TestBed } from '@angular/core/testing';

import { RecordIslandHttpService } from './record-island-http.service';

describe('RecordIslandHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecordIslandHttpService = TestBed.get(RecordIslandHttpService);
    expect(service).toBeTruthy();
  });
});
