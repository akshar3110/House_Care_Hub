const express = require('express');
const router = express.Router();
const BookingPayments = require('../models/BookingPayments');

router.post('/', async (req, res) => {
    const bookingPayments = new BookingPayments(req.body);
    await bookingPayments.save();
    res.send(bookingPayments);
});

router.get('/', async (req, res) => {
    const bookingPayments = await BookingPayments.find();
    res.send(bookingPayments);
});


router.put('/:id', async (req, res) => {
    const bookingPayments = await Bookings.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(bookingPayments);
});

router.delete('/:id', async (req, res) => {
    await BookingPayments.findByIdAndDelete(req.params.id);
    res.send({ message: 'Booking Payments deleted' });
});

module.exports = router;
