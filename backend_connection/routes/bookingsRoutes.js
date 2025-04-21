const express = require('express');
const router = express.Router();
const Bookings = require('../models/Bookings');

// Create Student
router.post('/', async (req, res) => {
    const bookings = new Bookings(req.body);
    await bookings.save();
    res.send(bookings);
});

// Read Students
router.get('/', async (req, res) => {
    const bookings = await Bookings.find();
    res.send(bookings);
});

// Update Student
router.put('/:id', async (req, res) => {
    const bookings = await Bookings.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(bookings);
});

// Delete Student
router.delete('/:id', async (req, res) => {
    await Bookings.findByIdAndDelete(req.params.id);
    res.send({ message: 'Bookings deleted' });
});

module.exports = router;
