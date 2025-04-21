import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent} from './categories.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategoriesService } from '../categories.service';

@NgModule({
  declarations: [CategoriesComponent],  // Declare StudentComponent
  imports: [CommonModule, HttpClientModule, FormsModule],           // Import CommonModule
  providers: [CategoriesService],
  exports: [CategoriesComponent]        // Export StudentComponent
})
export class CategoriesModule {}
