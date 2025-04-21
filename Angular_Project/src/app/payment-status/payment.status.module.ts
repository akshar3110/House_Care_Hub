import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentStatusComponent } from './payment-status.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfilesService } from '../profiles.service';
import { PaymentStatusService } from '../payment-status.service';

@NgModule({
  declarations: [PaymentStatusComponent],  // Declare StudentComponent
  imports: [CommonModule, HttpClientModule, FormsModule],           // Import CommonModule
  providers: [PaymentStatusService],
  exports: [PaymentStatusComponent]        // Export StudentComponent
})
export class PaymentStatusModule {}
