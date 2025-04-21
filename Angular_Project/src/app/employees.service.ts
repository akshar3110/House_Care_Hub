import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class EmployeesService {
    private apiUrl = 'http://localhost:3000/api/employees';

    constructor(private http: HttpClient) {}

    getEmployees() {
        return this.http.get(this.apiUrl);
    }

    addEmployees(areas: any) {
        return this.http.post(this.apiUrl, areas);
    }

    updateEmployees(id: string, areas: any) {
        return this.http.put(`${this.apiUrl}/${id}`, areas);
    }

    deleteEmployees(id: string) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
