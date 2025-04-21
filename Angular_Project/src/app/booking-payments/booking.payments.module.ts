import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingPaymentsComponent } from './booking-payments.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookingsService } from '../bookings.service';
import { BookingPaymentsService } from '../booking-payments.service';

@NgModule({
  declarations: [BookingPaymentsComponent],  // Declare StudentComponent
  imports: [CommonModule, HttpClientModule, FormsModule],           // Import CommonModule
  providers: [BookingPaymentsService],
  exports: [BookingPaymentsComponent]        // Export StudentComponent
})
export class BookingPaymentsModule {}
