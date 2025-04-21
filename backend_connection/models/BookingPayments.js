const mongoose = require('mongoose');

const bookingPaymentsSchema = new mongoose.Schema({
    Id:Number,
    AttemptedOnDateTime:String,
    PaymentReferenceNumber:String,
    BookingId:Number,
    PaymentStatusId:Number
});

module.exports = mongoose.model('BookingPayments', bookingPaymentsSchema);
