import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BookingsService } from '../bookings.service';
import { BookingPaymentRefundsService } from '../booking-payment-refunds.service';


@Component({
    selector: 'app-booking-payment-refunds',
    standalone: true,
    imports: [HttpClientModule, FormsModule, CommonModule],
    templateUrl: './booking-payment-refunds.component.html',
    providers: [BookingPaymentRefundsService]
})
export class BookingPaymentRefundsComponent implements OnInit {
    bookingPaymentRefunds: any[] = [];
    bookingPaymentRefund = {Id:'',InitiateDateTime:'',BookingPaymentId:''};
    editing = false;
    editId: string | null = null;
    bookingPaymentRefundsService: any;

    constructor(private bookingPaymentRefundsServices: BookingPaymentRefundsService) {}

    ngOnInit() {
        this.loadBookingPaymentRefunds();
    }

    loadBookingPaymentRefunds() {
        this.bookingPaymentRefundsServices.getBookingPaymentRefunds().subscribe((data: any) => {
            this.bookingPaymentRefunds = data;
        });
    }
    saveBookingPaymentRefunds() {
      if (this.editing) {
          this.bookingPaymentRefundsServices.updateBookingPaymentRefunds(this.editId!, this.bookingPaymentRefund).subscribe(() => {
              this.loadBookingPaymentRefunds();
              this.resetForm();
          });
      } else {
          this.bookingPaymentRefundsServices.addBookingPaymentRefunds(this.bookingPaymentRefund).subscribe(() => {
              this.loadBookingPaymentRefunds();
              this.resetForm();
          });
      }
  }

    editBookingPaymentRefunds(bookingPaymentRefund: any) {
        this.bookingPaymentRefund = { ...bookingPaymentRefund };
        this.editing = true;
        this.editId = bookingPaymentRefund._id;
    }

    deleteBookingPaymentRefunds(id: string) {
      this.bookingPaymentRefundsServices.deleteBookingPaymentRefunds(id).subscribe(() => {
          this.loadBookingPaymentRefunds();
      });
  }
    
    resetForm() {
        this.bookingPaymentRefund = {Id:'',InitiateDateTime:'',BookingPaymentId:''};
        this.editing = false;
        this.editId = null;
    }
}
