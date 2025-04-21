import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingStatusTimingsComponent } from './booking-status-timings.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookingsService } from '../bookings.service';
import { BookingStatusTimingsService } from '../booking-status-timings.service';

@NgModule({
  declarations: [BookingStatusTimingsComponent],  // Declare StudentComponent
  imports: [CommonModule, HttpClientModule, FormsModule],           // Import CommonModule
  providers: [BookingStatusTimingsService],
  exports: [BookingStatusTimingsComponent]        // Export StudentComponent
})
export class BookingStatusTimingsModule {}
