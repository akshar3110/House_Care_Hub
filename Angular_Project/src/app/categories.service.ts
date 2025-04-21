import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {
    private apiUrl = 'http://localhost:3000/api/categories';

    constructor(private http: HttpClient) {}

    getCategories() {
        return this.http.get(this.apiUrl);
    }

    addCategories(areas: any) {
        return this.http.post(this.apiUrl, areas);
    }

    updateCategories(id: string, areas: any) {
        return this.http.put(`${this.apiUrl}/${id}`, areas);
    }

    deleteCategories(id: string) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
