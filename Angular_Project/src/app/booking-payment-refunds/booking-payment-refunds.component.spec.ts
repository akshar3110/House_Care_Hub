import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPaymentRefundsComponent } from './booking-payment-refunds.component';

describe('BookingPaymentRefundsComponent', () => {
  let component: BookingPaymentRefundsComponent;
  let fixture: ComponentFixture<BookingPaymentRefundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingPaymentRefundsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingPaymentRefundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
