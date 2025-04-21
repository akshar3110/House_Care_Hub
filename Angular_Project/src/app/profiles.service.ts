import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProfilesService {
    private apiUrl = 'http://localhost:3000/api/profiles';

    constructor(private http: HttpClient) {}

    getProfiles() {
        return this.http.get(this.apiUrl);
    }

    addProfiles(areas: any) {
        return this.http.post(this.apiUrl, areas);
    }

    updateProfiles(id: string, areas: any) {
        return this.http.put(`${this.apiUrl}/${id}`, areas);
    }

    deleteProfiles(id: string) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
