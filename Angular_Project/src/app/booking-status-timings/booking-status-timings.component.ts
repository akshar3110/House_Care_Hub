import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BookingStatusTimingsService } from '../booking-status-timings.service';


@Component({
    selector: 'app-booking-status-timings',
    standalone: true,
    imports: [HttpClientModule, FormsModule, CommonModule],
    templateUrl: './booking-status-timings.component.html',
    providers: [BookingStatusTimingsService]
})
export class BookingStatusTimingsComponent implements OnInit {
    bookingStatusTimings: any[] = [];
    bookingStatusTiming = {Id:'',BookingId:'',BookingStatusId:'',DateTime:'',Reason:''};
    editing = false;
    editId: string | null = null;
    bookingStatusTimingsService: any;

    constructor(private bookingStatusTimingServices: BookingStatusTimingsService) {}

    ngOnInit() {
        this.loadBookingStatusTimings();
    }

    loadBookingStatusTimings() {
        this.bookingStatusTimingServices.getBookingStatusTimings().subscribe((data: any) => {
            this.bookingStatusTimings = data;
        });
    }
    saveBookingStatusTimings() {
      if (this.editing) {
          this.bookingStatusTimingServices.updateBookingStatusTimings(this.editId!, this.bookingStatusTiming).subscribe(() => {
              this.loadBookingStatusTimings();
              this.resetForm();
          });
      } else {
          this.bookingStatusTimingServices.addBookingStatusTimings(this.bookingStatusTiming).subscribe(() => {
              this.loadBookingStatusTimings();
              this.resetForm();
          });
      }
  }

    editBookingStatusTimings(bookingStatusTiming: any) {
        this.bookingStatusTiming = { ...bookingStatusTiming };
        this.editing = true;
        this.editId = bookingStatusTiming._id;
    }

    deleteBookingStatusTimings(id: string) {
      this.bookingStatusTimingServices.deleteBookings(id).subscribe(() => {
          this.loadBookingStatusTimings();
      });
  }
    
    resetForm() {
        this.bookingStatusTiming = {Id:'',BookingId:'',BookingStatusId:'',DateTime:'',Reason:''};
        this.editing = false;
        this.editId = null;
    }
}
