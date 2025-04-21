const mongoose = require('mongoose');

const bookingStatusSchema = new mongoose.Schema({
    Id:Number,
    Name:String,
});

module.exports = mongoose.model('BookingStatus', bookingStatusSchema);
