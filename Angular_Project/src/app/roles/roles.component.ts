import { Component, OnInit } from '@angular/core';
import { RolesService} from '../roles.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-roles',
    standalone: true,
    imports: [HttpClientModule, FormsModule, CommonModule],
    templateUrl: './roles.component.html',
    providers: [RolesService]
})
export class RolesComponent implements OnInit {
    roles: any[] = [];
    role = { Id: '', Name: ''};
    editing = false;
    editId: string | null = null;

    constructor(private roleService: RolesService) {}


    ngOnInit() {
        this.loadRoles();
    }

    loadRoles() {
        this.roleService.getRole().subscribe((data: any) => {
            this.roles = data;
        });
    }

    saveRole() {
        if (this.editing) {
            this.roleService.updateRole(this.editId!, this.role).subscribe(() => {
                this.loadRoles();
                this.resetForm();
            });
        } else {
            this.roleService.addRole(this.role).subscribe(() => {
                this.loadRoles();
                this.resetForm();
            });
        }
    }

    editRole(role: any) {
        this.role = { ...role };
        this.editing = true;
        this.editId = role._id;
    }

    deleteRole(id: string) {
        this.roleService.deleteRole(id).subscribe(() => {
            this.loadRoles();
        });
    }
    
    resetForm() {
        this.role = {Id:'',Name:''};
        this.editing = false;
        this.editId = null;
    }
}
