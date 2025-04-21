import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeesService } from '../employees.service';

@NgModule({
  declarations: [EmployeesComponent],  // Declare StudentComponent
  imports: [CommonModule, HttpClientModule, FormsModule],           // Import CommonModule
  providers: [EmployeesService],
  exports: [EmployeesComponent]        // Export StudentComponent
})
export class EmployeesModule {}
