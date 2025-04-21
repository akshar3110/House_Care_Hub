const mongoose = require('mongoose');

const bookingStatusTimingsSchema = new mongoose.Schema({
    Id:Number,
    BookingId:Number,
    BookingStatusId:Number,
    DateTime:String,
    Reason:String
});

module.exports = mongoose.model('BookingStatusTimings', bookingStatusTimingsSchema);
