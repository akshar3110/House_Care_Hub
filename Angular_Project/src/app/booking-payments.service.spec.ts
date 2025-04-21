import { TestBed } from '@angular/core/testing';

import { BookingPaymentsService } from './booking-payments.service';

describe('BookingPaymentsService', () => {
  let service: BookingPaymentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingPaymentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
