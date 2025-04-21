import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreasComponent } from './areas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from '../users.service';
import { AreasService } from '../areas.service';

@NgModule({
  declarations: [AreasComponent],  // Declare StudentComponent
  imports: [CommonModule, HttpClientModule, FormsModule],           // Import CommonModule
  providers: [AreasService],
  exports: [AreasComponent]        // Export StudentComponent
})
export class AreasModule {}
