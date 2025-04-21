import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BookingsService {
    private apiUrl = 'http://localhost:3000/api/bookings';

    constructor(private http: HttpClient) {}

    getBookings() {
        return this.http.get(this.apiUrl);
    }

    addBookings(bookings: any) {
        return this.http.post(this.apiUrl,bookings);
    }

    updateBookings(id: string, bookings: any) {
        return this.http.put(`${this.apiUrl}/${id}`, bookings);
    }

    deleteBookings(id: string) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
