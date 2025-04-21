import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BookingPaymentsService } from '../booking-payments.service';


@Component({
    selector: 'app-booking-payments',
    standalone: true,
    imports: [HttpClientModule, FormsModule, CommonModule],
    templateUrl: './booking-payments.component.html',
    providers: [BookingPaymentsService]
})
export class BookingPaymentsComponent implements OnInit {
    bookingPayments: any[] = [];
    bookingPayment = {Id:'',AttemptedOnDateTime:'',PaymentReferenceNumber:'',BookingId:'',PaymentStatusId:''};
    editing = false;
    editId: string | null = null;
    bookingService: any;

    constructor(private bookingPaymentsService: BookingPaymentsService) {}

    ngOnInit() {
        this.loadBookingPaymentsService();
    }

    loadBookingPaymentsService() {
        this.bookingPaymentsService.getBookingPayments().subscribe((data: any) => {
            this.bookingPayments = data;
        });
    }
    saveBookingPayments() {
      if (this.editing) {
          this.bookingPaymentsService.updateBookingPayments(this.editId!, this.bookingPayment).subscribe(() => {
              this.loadBookingPaymentsService();
              this.resetForm();
          });
      } else {
          this.bookingPaymentsService.addBookingPayments(this.bookingPayment).subscribe(() => {
              this.loadBookingPaymentsService();
              this.resetForm();
          });
      }
  }

    editBookingPayments(bookingPayment: any) {
        this.bookingPayment = { ...bookingPayment };
        this.editing = true;
        this.editId = bookingPayment._id;
    }

    deleteBookingPayments(id: string) {
      this.bookingPaymentsService.deleteBookingPayments(id).subscribe(() => {
          this.loadBookingPaymentsService();
      });
  }
    
    resetForm() {
        this.bookingPayment = {Id:'',AttemptedOnDateTime:'',PaymentReferenceNumber:'',BookingId:'',PaymentStatusId:''};
        this.editing = false;
        this.editId = null;
    }
}
