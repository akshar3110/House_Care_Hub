import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BookingStatusService } from '../booking-status.service';


@Component({
    selector: 'app-booking-status',
    standalone: true,
    imports: [HttpClientModule, FormsModule, CommonModule],
    templateUrl: './booking-status.component.html',
    providers: [BookingStatusService]
})
export class BookingStatusComponent implements OnInit {
    bookingStatuses: any[] = [];
    bookingStatus = {Id:'',Name:''};
    editing = false;
    editId: string | null = null;
    bookingStatusServices: any;

    constructor(private bookingsStatusService: BookingStatusService) {}

    ngOnInit() {
        this.loadBookingStatus();
    }

    loadBookingStatus() {
        this.bookingsStatusService.getBookingStatus().subscribe((data: any) => {
            this.bookingStatuses = data;
        });
    }
    saveBookingStatus() {
      if (this.editing) {
          this.bookingsStatusService.updateBookingStatus(this.editId!, this.bookingStatus).subscribe(() => {
              this.loadBookingStatus();
              this.resetForm();
          });
      } else {
          this.bookingsStatusService.addBookingStatus(this.bookingStatus).subscribe(() => {
              this.loadBookingStatus();
              this.resetForm();
          });
      }
  }

    editBookingStatus(bookingStatus: any) {
        this.bookingStatus = { ...bookingStatus };
        this.editing = true;
        this.editId = bookingStatus._id;
    }

    deleteBookingStatus(id: string) {
        this.bookingsStatusService.deleteBookingStatus(id).subscribe(() => {
            this.loadBookingStatus();
        });
    }
    
    
    resetForm() {
        this.bookingStatus = {Id:'',Name:''};
        this.editing = false;
        this.editId = null;
    }
}
