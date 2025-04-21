import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingPaymentRefundsComponent } from './booking-payment-refunds.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookingsService } from '../bookings.service';
import { BookingPaymentRefundsService } from '../booking-payment-refunds.service';

@NgModule({
  declarations: [BookingPaymentRefundsComponent],  // Declare StudentComponent
  imports: [CommonModule, HttpClientModule, FormsModule],           // Import CommonModule
  providers: [BookingPaymentRefundsService],
  exports: [BookingPaymentRefundsComponent]        // Export StudentComponent
})
export class BookingPaymentRefundsModule {}
