import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BookingPaymentsService {
    private apiUrl = 'http://localhost:3000/api/bookingPayments';

    constructor(private http: HttpClient) {}

    getBookingPayments() {
        return this.http.get(this.apiUrl);
    }

    addBookingPayments(bookingPayment: any) {
        return this.http.post(this.apiUrl,bookingPayment);
    }

    updateBookingPayments(id: string, bookings: any) {
        return this.http.put(`${this.apiUrl}/${id}`, bookings);
    }

    deleteBookingPayments(id: string) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
