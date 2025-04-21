import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RolesService } from '../roles.service';

@NgModule({
  declarations: [RolesComponent],  // Declare StudentComponent
  imports: [CommonModule, HttpClientModule, FormsModule],           // Import CommonModule
  providers: [RolesService],
  exports: [RolesComponent]        // Export StudentComponent
})
export class RolesModule {}
