const express = require('express');
const router = express.Router();
const BookingStatusTimings = require('../models/BookingStatusTimings');

// Create Student
router.post('/', async (req, res) => {
    const bookingStatusTimings = new BookingStatusTimings(req.body);
    await bookingStatusTimings.save();
    res.send(bookingStatusTimings);
});

// Read Students
router.get('/', async (req, res) => {
    const bookingStatusTimings = await BookingStatusTimings.find();
    res.send(bookingStatusTimings);
});

// Update Student
router.put('/:id', async (req, res) => {
    const bookingStatusTimings = await BookingStatusTimings.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(bookingStatusTimings);
});

// Delete Student
router.delete('/:id', async (req, res) => {
    await BookingStatusTimings.findByIdAndDelete(req.params.id);
    res.send({ message: 'Booking Status Timings deleted' });
});

module.exports = router;
