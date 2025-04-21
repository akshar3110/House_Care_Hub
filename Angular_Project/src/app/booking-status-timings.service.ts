import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BookingStatusTimingsService {
    private apiUrl = 'http://localhost:3000/api/bookingStatusTimings';

    constructor(private http: HttpClient) {}

    getBookingStatusTimings() {
        return this.http.get(this.apiUrl);
    }

    addBookingStatusTimings(bookingStatusTimings: any) {
        return this.http.post(this.apiUrl,bookingStatusTimings);
    }

    updateBookingStatusTimings(id: string, bookingStatusTimings: any) {
        return this.http.put(`${this.apiUrl}/${id}`, bookingStatusTimings);
    }

    deleteBookings(id: string) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
