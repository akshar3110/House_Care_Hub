import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BookingsService } from '../bookings.service';
import { PaymentStatusService } from '../payment-status.service';


@Component({
    selector: 'app-payment-status',
    standalone: true,
    imports: [HttpClientModule, FormsModule, CommonModule],
    templateUrl: './payment-status.component.html',
    providers: [PaymentStatusService]
})
export class PaymentStatusComponent implements OnInit {
    paymentStatuses: any[] = [];
    paymentStatus = {Id:'',Name:''};
    editing = false;
    editId: string | null = null;
    paymentStatusService: any;

    constructor(private PaymentStatusService: PaymentStatusService) {}

    ngOnInit() {
        this.loadPaymentStatus();
    }

    loadPaymentStatus() {
        this.PaymentStatusService.getPaymentStatus().subscribe((data: any) => {
            this.paymentStatuses = data;
        });
    }
    savePaymentStatus() {
      if (this.editing) {
          this.PaymentStatusService.updatePaymentStatus(this.editId!, this.paymentStatus).subscribe(() => {
              this.loadPaymentStatus();
              this.resetForm();
          });
      } else {
          this.PaymentStatusService.addPaymentStatus(this.paymentStatus).subscribe(() => {
              this.loadPaymentStatus();
              this.resetForm();
          });
      }
  }

    editPaymentStatus(paymentStatus: any) {
        this.paymentStatus = { ...paymentStatus };
        this.editing = true;
        this.editId = paymentStatus._id;
    }

    deletePaymentStatus(id: string) {
      this.PaymentStatusService.deletePaymentStatus(id).subscribe(() => {
          this.loadPaymentStatus();
      });
  }
    
    resetForm() {
        this.paymentStatus = {Id:'',Name:''};
        this.editing = false;
        this.editId = null;
    }
}
