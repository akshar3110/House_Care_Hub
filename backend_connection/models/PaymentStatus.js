const mongoose = require('mongoose');

const paymentStatusSchema = new mongoose.Schema({
    Id:Number,
    Name:String
});

module.exports = mongoose.model('PaymentStatus', paymentStatusSchema);
