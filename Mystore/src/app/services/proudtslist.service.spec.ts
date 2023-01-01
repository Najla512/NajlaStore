import { TestBed } from '@angular/core/testing';

import { ProudtslistService } from './proudtslist.service';

describe('ProudtslistService', () => {
  let service: ProudtslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProudtslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
