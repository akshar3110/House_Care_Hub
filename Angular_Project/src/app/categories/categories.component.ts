import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProfilesService } from '../profiles.service';
import { CategoriesService } from '../categories.service';


@Component({
    selector: 'app-categories',
    standalone: true,
    imports: [HttpClientModule, FormsModule, CommonModule],
    templateUrl: './categories.component.html',
    providers: [CategoriesService]
})
export class CategoriesComponent implements OnInit {
    categories: any[] = [];
    category = {Id:'',Name:'',CategoryId:''};
    editing = false;
    editId: string | null = null;
    categoryService: any;

    constructor(private categoriesService: CategoriesService) {}

    ngOnInit() {
        this.loadCategories();
    }

    loadCategories() {
        this.categoriesService.getCategories().subscribe((data: any) => {
            this.categories = data;
        });
    }

    saveCategories() {
        if (this.editing) {
            this.categoriesService.updateCategories(this.editId!, this.category).subscribe(() => {
                this.loadCategories();
                this.resetForm();
            });
        } else {
            this.categoriesService.addCategories(this.category).subscribe(() => {
                this.loadCategories();
                this.resetForm();
            });
        }
    }

    editCategories(category: any) {
        this.category = { ...category };
        this.editing = true;
        this.editId = category._id;
    }

    deleteCategories(id: string) {
      this.categoriesService.deleteCategories(id).subscribe(() => {
          this.loadCategories();
      });
  }
    
    resetForm() {
        this.category = {Id:'',Name:'',CategoryId:''};
        this.editing = false;
        this.editId = null;
    }
}
