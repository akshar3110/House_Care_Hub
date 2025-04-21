const mongoose = require('mongoose');

const bookingsSchema = new mongoose.Schema({
    Id:Number,
    Name:String,
    AlterNativeContactNo:Number,
    AreaId:Number,
    Booking_date:String,
    BookingProvideDateTime:String,
    UserId:Number
});

module.exports = mongoose.model('Bookings', bookingsSchema);
