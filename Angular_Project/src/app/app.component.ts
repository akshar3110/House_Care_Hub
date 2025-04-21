import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet], // Add CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  navGroups = [
    { text: 'Dashboard', link: '/'},
    { text: 'Roles', link: '/roles'},
    { text: 'Users', link: '/users'},
    { text: 'Profiles', link: '/profiles'},
    { text: 'Areas', link: '/areas'},
    { text: 'Employees', link: '/employees'},
    { text: 'Categories', link: '/categories'},
    { text: 'Services', link: '/services'},
    { text: 'Bookings', link: '/bookings'},
    { text: 'Booking-status', link: '/booking-status'},
    { text: 'Booking-status-timings', link: '/booking-status-timings'},
    { text: 'Payment-status', link: '/payment-status'},
    { text: 'Booking-payments', link: '/booking-payments'},
    { text: 'Booking-payment-refunds', link: '/booking-payment-refunds'},
    // ... rest of your nav items
  ];
}