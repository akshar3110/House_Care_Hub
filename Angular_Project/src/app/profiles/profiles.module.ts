import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesComponent } from './profiles.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfilesService } from '../profiles.service';

@NgModule({
  declarations: [ProfilesComponent],  // Declare StudentComponent
  imports: [CommonModule, HttpClientModule, FormsModule],           // Import CommonModule
  providers: [ProfilesService],
  exports: [ProfilesComponent]        // Export StudentComponent
})
export class ProfilesModule {}
