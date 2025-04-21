const express = require('express');
const router = express.Router();
const Areas = require('../models/Areas');

// Create Student
router.post('/', async (req, res) => {
    const areas = new Areas(req.body);
    await areas.save();
    res.send(areas);
});

// Read Students
router.get('/', async (req, res) => {
    const areas = await Areas.find();
    res.send(areas);
});

// Update Student
router.put('/:id', async (req, res) => {
    const areas = await Areas.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(areas);
});

// Delete Student
router.delete('/:id', async (req, res) => {
    await Areas.findByIdAndDelete(req.params.id);
    res.send({ message: 'Areas deleted' });
});

module.exports = router;
