import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingStatusComponent } from './booking-status.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookingStatusService } from '../booking-status.service';

@NgModule({
  declarations: [BookingStatusComponent],  // Declare StudentComponent
  imports: [CommonModule, HttpClientModule, FormsModule],           // Import CommonModule
  providers: [BookingStatusService],
  exports: [BookingStatusComponent]        // Export StudentComponent
})
export class BookingStatusModule {}
