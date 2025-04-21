import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EmployeesService } from '../employees.service';


@Component({
    selector: 'app-employees',
    standalone: true,
    imports: [HttpClientModule, FormsModule, CommonModule],
    templateUrl: './employees.component.html',
    providers: [EmployeesService]
})
export class EmployeesComponent implements OnInit {
    employees: any[] = [];
    employee = { Id: '',Password:'',Email:'',Area:'',WorkExperience:'',AdharCardNumber:'',AdharCardPhoto:'',DateOfJoining:'',DateOfResignation:'',IsActive:'',RoleId:''};
    editing = false;
    editId: string | null = null;
    employeeService: any;

    constructor(private employeesService: EmployeesService) {}

    ngOnInit() {
        this.loadEmployees();
    }

    loadEmployees() {
        this.employeesService.getEmployees().subscribe((data: any) => {
            this.employees = data;
        });
    }

    saveEmployees() {
        if (this.editing) {
            this.employeesService.updateEmployees(this.editId!, this.employee).subscribe(() => {
                this.loadEmployees();
                this.resetForm();
            });
        } else {
            this.employeesService.addEmployees(this.employee).subscribe(() => {
                this.loadEmployees();
                this.resetForm();
            });
        }
    }

    editEmployees(employee: any) {
        this.employee = { ...employee };
        this.editing = true;
        this.editId = employee._id;
    }

    deleteEmployees(id: string) {
      this.employeesService.deleteEmployees(id).subscribe(() => {
          this.loadEmployees();
      });
  }
    
    resetForm() {
        this.employee = { Id: '',Password:'',Email:'',Area:'',WorkExperience:'',AdharCardNumber:'',AdharCardPhoto:'',DateOfJoining:'',DateOfResignation:'',IsActive:'',RoleId:''};
        this.editing = false;
        this.editId = null;
    }
}
