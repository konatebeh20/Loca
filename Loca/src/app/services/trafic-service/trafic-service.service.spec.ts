import { TestBed } from '@angular/core/testing';

import { TraficServiceService } from './trafic-service.service';

describe('TraficServiceService', () => {
  let service: TraficServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraficServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
