import { TestBed } from '@angular/core/testing';

import { BookingPaymentRefundsService } from './booking-payment-refunds.service';

describe('BookingPaymentRefundsService', () => {
  let service: BookingPaymentRefundsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingPaymentRefundsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
