const express = require('express');
const router = express.Router();
const BookingPaymentRefunds = require('../models/BookingPaymentRefunds');

router.post('/', async (req, res) => {
    const bookingPaymentRefunds = new BookingPaymentRefunds(req.body);
    await bookingPaymentRefunds.save();
    res.send(bookingPaymentRefunds);
});

router.get('/', async (req, res) => {
    const bookingPaymentRefunds = await BookingPaymentRefunds.find();
    res.send(bookingPaymentRefunds);
});


router.put('/:id', async (req, res) => {
    const bookingPaymentRefunds = await BookingPaymentRefunds.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(bookingPaymentRefunds);
});

router.delete('/:id', async (req, res) => {
    await BookingPaymentRefunds.findByIdAndDelete(req.params.id);
    res.send({ message: 'Booking Payments Refunds deleted' });
});

module.exports = router;
