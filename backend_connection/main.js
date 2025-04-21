const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 3000;


app.use(express.json());

mongoose.connect('mongodb://localhost:27017/hrspDB').then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));


//  For allowing cors
app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Only allow certain HTTP methods
    allowedHeaders: ['Content-Type'], // Only allow certain headers
    origin: '*', // Restrict access to a specific origin
}));

app.use('/api/roles', require('./routes/rolesRoutes'));
app.use('/api/users', require('./routes/usersRoutes'));
app.use('/api/areas', require('./routes/areasRoutes'));
app.use('/api/employees', require('./routes/employeesRoutes'));
app.use('/api/profiles', require('./routes/profilesRoutes'));
app.use('/api/categories', require('./routes/categoriesRoutes'));
app.use('/api/services', require('./routes/servicesRoutes'));
app.use('/api/bookings', require('./routes/bookingsRoutes'));
app.use('/api/bookingStatus', require('./routes/bookingStatusRoutes'));
app.use('/api/bookingStatusTimings', require('./routes/bookingStatusTimingsRoutes'));
app.use('/api/paymentStatus', require('./routes/paymentStatusRoutes'));
app.use('/api/bookingPayments', require('./routes/bookingPaymentsRoutes'));
app.use('/api/bookingPaymentRefunds', require('./routes/bookingPaymentRefundsRoutes'));




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});