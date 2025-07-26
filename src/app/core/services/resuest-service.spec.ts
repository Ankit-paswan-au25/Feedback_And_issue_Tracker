import { TestBed } from '@angular/core/testing';

import { ResuestService } from './resuest-service';

describe('ResuestService', () => {
  let service: ResuestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResuestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
