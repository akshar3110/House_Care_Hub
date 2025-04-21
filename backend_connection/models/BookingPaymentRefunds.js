const mongoose = require('mongoose');

const bookingPaymentRefundSchema = new mongoose.Schema({
    Id:Number,
    InitiateDateTime:String,
    BookingPaymentId:Number
});

module.exports = mongoose.model('BookingPaymentRefunds', bookingPaymentRefundSchema);
