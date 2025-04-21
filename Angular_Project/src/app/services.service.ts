import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ServicesService {
    private apiUrl = 'http://localhost:3000/api/services';

    constructor(private http: HttpClient) {}

    getServices() {
        return this.http.get(this.apiUrl);
    }

    addServices(services: any) {
        return this.http.post(this.apiUrl, services);
    }

    updateServices(id: string, services: any) {
        return this.http.put(`${this.apiUrl}/${id}`, services);
    }

    deleteServices(id: string) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
