const express = require('express');
const router = express.Router();
const BookingStatus = require('../models/BookingStatus');

// Create Student
router.post('/', async (req, res) => {
    const bookingStatus = new BookingStatus(req.body);
    await bookingStatus.save();
    res.send(bookingStatus);
});

// Read Students
router.get('/', async (req, res) => {
    const bookingStatus = await BookingStatus.find();
    res.send(bookingStatus);
});

// Update Student
router.put('/:id', async (req, res) => {
    const bookingStatus = await BookingStatus.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(bookingStatus);
});

// Delete Student
router.delete('/:id', async (req, res) => {
    await BookingStatus.findByIdAndDelete(req.params.id);
    res.send({ message: 'BookingStatus deleted' });
});

module.exports = router;
