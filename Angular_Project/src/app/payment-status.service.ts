import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PaymentStatusService {
    private apiUrl = 'http://localhost:3000/api/paymentStatus';

    constructor(private http: HttpClient) {}

    getPaymentStatus() {
        return this.http.get(this.apiUrl);
    }

    addPaymentStatus(paymentStatus: any) {
        return this.http.post(this.apiUrl,paymentStatus);
    }

    updatePaymentStatus(id: string, paymentStatus: any) {
        return this.http.put(`${this.apiUrl}/${id}`, paymentStatus);
    }

    deletePaymentStatus(id: string) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
