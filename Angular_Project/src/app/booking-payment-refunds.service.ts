import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BookingPaymentRefundsService {
    private apiUrl = 'http://localhost:3000/api/bookingPaymentRefunds';

    constructor(private http: HttpClient) {}

    getBookingPaymentRefunds() {
        return this.http.get(this.apiUrl);
    }

    addBookingPaymentRefunds(bookingPaymentRefunds: any) {
        return this.http.post(this.apiUrl,bookingPaymentRefunds);
    }

    updateBookingPaymentRefunds(id: string, bookingPaymentRefunds: any) {
        return this.http.put(`${this.apiUrl}/${id}`, bookingPaymentRefunds);
    }

    deleteBookingPaymentRefunds(id: string) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
