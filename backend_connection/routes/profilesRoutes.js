const express = require('express');
const router = express.Router();
const Profiles = require('../models/Profiles');

// Create Student
router.post('/', async (req, res) => {
    const profiles = new Profiles(req.body);
    await profiles.save();
    res.send(profiles);
});

// Read Students
router.get('/', async (req, res) => {
    const profiles = await Profiles.find();
    res.send(profiles);
});

// Update Student
router.put('/:id', async (req, res) => {
    const profiles = await Profiles.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(profiles);
});

// Delete Student
router.delete('/:id', async (req, res) => {
    await Profiles.findByIdAndDelete(req.params.id);
    res.send({ message: 'Profile deleted' });
});

module.exports = router;
