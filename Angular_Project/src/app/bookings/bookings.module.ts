import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsComponent } from './bookings.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookingsService } from '../bookings.service';

@NgModule({
  declarations: [BookingsComponent],  // Declare StudentComponent
  imports: [CommonModule, HttpClientModule, FormsModule],           // Import CommonModule
  providers: [BookingsService],
  exports: [BookingsComponent]        // Export StudentComponent
})
export class BookingsModule {}
