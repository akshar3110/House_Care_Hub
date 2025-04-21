import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { AreasComponent } from './areas/areas.component';
import { EmployeesComponent } from './employees/employees.component';
import { CategoriesComponent } from './categories/categories.component';
import { ServicesComponent } from './services/services.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingStatusComponent } from './booking-status/booking-status.component';
import { BookingStatusTimingsComponent } from './booking-status-timings/booking-status-timings.component';
import { PaymentStatusComponent } from './payment-status/payment-status.component';
import { BookingPaymentsComponent } from './booking-payments/booking-payments.component';
import { BookingPaymentRefundsComponent } from './booking-payment-refunds/booking-payment-refunds.component';



export const routes: Routes = [
  { 
    path: '',
    component: HomeComponent 
  },
 
  {
    path: 'roles',
    component: RolesComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'profiles',
    component: ProfilesComponent
  },
  {
    path: 'areas',
    component: AreasComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'bookings',
    component: BookingsComponent
  },
  {
    path: 'booking-status',
    component: BookingStatusComponent
  },
  {
    path: 'booking-status-timings',
    component: BookingStatusTimingsComponent 
  },
  {
    path: 'payment-status',
    component: PaymentStatusComponent
  },
   {
    path: 'booking-payments',
    component: BookingPaymentsComponent
  },
  {
    path: 'booking-payment-refunds',
    component: BookingPaymentRefundsComponent
  },

  
];