import { TestBed } from '@angular/core/testing';

import { PlService } from './pl.service';

describe('PlService', () => {
  let service: PlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
