import { TestBed } from '@angular/core/testing';

import { ClickCountService } from './click-count.service';

describe('ClickCountService', () => {
  let service: ClickCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClickCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
