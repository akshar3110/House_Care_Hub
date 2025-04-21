import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../services.service';


@Component({
    selector: 'app-services',
    standalone: true,
    imports: [HttpClientModule, FormsModule, CommonModule],
    templateUrl: './services.component.html',
    providers: [ServicesService]
})
export class ServicesComponent implements OnInit {
    services: any[] = [];
    service = {Id:'',Name:'',Price:'',Description:'',PictureFileName:'',CategoryId:''}
    editing = false;
    editId: string | null = null;
    serviceService: any;

    constructor(private servicesService: ServicesService) {}

    ngOnInit() {
        this.loadServices();
    }

    loadServices() {
        this.servicesService.getServices().subscribe((data: any) => {
            this.services = data;
        });
    }
    saveServices() {
      if (this.editing) {
          this.servicesService.updateServices(this.editId!, this.service).subscribe(() => {
              this.loadServices();
              this.resetForm();
          });
      } else {
          this.servicesService.addServices(this.service).subscribe(() => {
              this.loadServices();
              this.resetForm();
          });
      }
  }

    editServices(service: any) {
        this.service = { ...service };
        this.editing = true;
        this.editId = service._id;
    }

    deleteServices(id: string) {
      this.servicesService.deleteServices(id).subscribe(() => {
          this.loadServices();
      });
  }
    
    resetForm() {
        this.service = {Id:'',Name:'',Price:'',Description:'',PictureFileName:'',CategoryId:''}
        this.editing = false;
        this.editId = null;
    }
}
