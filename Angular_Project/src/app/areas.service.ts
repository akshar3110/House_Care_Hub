import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AreasService {
    private apiUrl = 'http://localhost:3000/api/areas';

    constructor(private http: HttpClient) {}

    getAreas() {
        return this.http.get(this.apiUrl);
    }

    addAreas(areas: any) {
        return this.http.post(this.apiUrl, areas);
    }

    updateAreas(id: string, areas: any) {
        return this.http.put(`${this.apiUrl}/${id}`, areas);
    }

    deleteAreas(id: string) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
