import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServicesService } from '../services.service';

@NgModule({
  declarations: [ServicesComponent],  // Declare StudentComponent
  imports: [CommonModule, HttpClientModule, FormsModule],           // Import CommonModule
  providers: [ServicesService],
  exports: [ServicesComponent]        // Export StudentComponent
})
export class ServicesModule {}
