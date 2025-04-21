const express = require('express');
const router = express.Router();
const Services = require('../models/Services');

// Create Student
router.post('/', async (req, res) => {
    const services = new Services(req.body);
    await services.save();
    res.send(services);
});

// Read Students
router.get('/', async (req, res) => {
    const services = await Services.find();
    res.send(services);
});

// Update Student
router.put('/:id', async (req, res) => {
    const services = await Services.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(services);
});

// Delete Student
router.delete('/:id', async (req, res) => {
    await Services.findByIdAndDelete(req.params.id);
    res.send({ message: 'Service deleted' });
});

module.exports = router;
