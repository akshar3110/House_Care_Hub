import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BookingsService } from '../bookings.service';


@Component({
    selector: 'app-bookings',
    standalone: true,
    imports: [HttpClientModule, FormsModule, CommonModule],
    templateUrl: './bookings.component.html',
    providers: [BookingsService]
})
export class BookingsComponent implements OnInit {
    bookings: any[] = [];
    booking = {Id:'',Name:'',AlterNativeContactNo:'',AreaId:'',Booking_date:'',BookingProvideDateTime:'',UserId:''};
    editing = false;
    editId: string | null = null;
    bookingService: any;

    constructor(private bookingsService: BookingsService) {}

    ngOnInit() {
        this.loadBookings();
    }

    loadBookings() {
        this.bookingsService.getBookings().subscribe((data: any) => {
            this.bookings = data;
        });
    }
    saveBookings() {
      if (this.editing) {
          this.bookingsService.updateBookings(this.editId!, this.booking).subscribe(() => {
              this.loadBookings();
              this.resetForm();
          });
      } else {
          this.bookingsService.addBookings(this.booking).subscribe(() => {
              this.loadBookings();
              this.resetForm();
          });
      }
  }

    editBookings(booking: any) {
        this.booking = { ...booking };
        this.editing = true;
        this.editId = booking._id;
    }

    deleteBookings(id: string) {
      this.bookingsService.deleteBookings(id).subscribe(() => {
          this.loadBookings();
      });
  }
    
    resetForm() {
        this.booking = {Id:'',Name:'',AlterNativeContactNo:'',AreaId:'',Booking_date:'',BookingProvideDateTime:'',UserId:''};
        this.editing = false;
        this.editId = null;
    }
}
