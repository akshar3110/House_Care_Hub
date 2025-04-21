import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RolesService {
    private apiUrl = 'http://localhost:3000/api/roles';

    constructor(private http: HttpClient) {}

    getRole() {
        return this.http.get(this.apiUrl);
    }

    addRole(student: any) {
        return this.http.post(this.apiUrl, student);
    }

    updateRole(id: string, student: any) {
        return this.http.put(`${this.apiUrl}/${id}`, student);
    }

    deleteRole(id: string) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
