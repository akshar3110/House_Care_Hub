import { TestBed } from '@angular/core/testing';

import { BookingStatusTimingsService } from './booking-status-timings.service';

describe('BookingStatusTimingsService', () => {
  let service: BookingStatusTimingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingStatusTimingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
