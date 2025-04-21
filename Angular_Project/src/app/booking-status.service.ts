import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BookingStatusService {
    private apiUrl = 'http://localhost:3000/api/bookingStatus';

    constructor(private http: HttpClient) {}

    getBookingStatus() {
        return this.http.get(this.apiUrl);
    }

    addBookingStatus(bookingStatus: any) {
        return this.http.post(this.apiUrl,bookingStatus);
    }

    updateBookingStatus(id: string, bookingStatus: any) {
        return this.http.put(`${this.apiUrl}/${id}`, bookingStatus);
    }

    deleteBookingStatus(id: string) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
