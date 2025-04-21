import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AreasService } from '../areas.service';


@Component({
    selector: 'app-areas',
    standalone: true,
    imports: [HttpClientModule, FormsModule, CommonModule],
    templateUrl: './areas.component.html',
    providers: [AreasService]
})
export class AreasComponent implements OnInit {
    areas: any[] = [];
    area = { Id: '', AreaName: '',CityName:'',StateName:'',CountryName:''};
    editing = false;
    editId: string | null = null;
    areaService: any;

    constructor(private areasService: AreasService) {}

    ngOnInit() {
        this.loadAreas();
    }

    loadAreas() {
        this.areasService.getAreas().subscribe((data: any) => {
            this.areas = data;
        });
    }

    saveAreas() {
        if (this.editing) {
            this.areasService.updateAreas(this.editId!, this.area).subscribe(() => {
                this.loadAreas();
                this.resetForm();
            });
        } else {
            this.areasService.addAreas(this.area).subscribe(() => {
                this.loadAreas();
                this.resetForm();
            });
        }
    }

    editAreas(area: any) {
        this.area = { ...area };
        this.editing = true;
        this.editId = area._id;
    }

    deleteAreas(id: string) {
        this.areasService.deleteAreas(id).subscribe(() => {
            this.loadAreas();
        });
    }
    
    resetForm() {
        this.area = { Id: '', AreaName: '',CityName:'',StateName:'',CountryName:''};
        this.editing = false;
        this.editId = null;
    }
}
