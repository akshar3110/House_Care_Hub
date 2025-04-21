const express = require('express');
const router = express.Router();
const Roles = require('../models/Roles');

// Create Student
router.post('/', async (req, res) => {
    const roles = new Roles(req.body);
    await roles.save();
    res.send(roles);
});

// Read Students
router.get('/', async (req, res) => {
    const roles = await Roles.find();
    res.send(roles);
});

// Update Student
router.put('/:id', async (req, res) => {
    const roles = await Roles.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(roles);
});

// Delete Student
router.delete('/:id', async (req, res) => {
    await Roles.findByIdAndDelete(req.params.id);
    res.send({ message: 'Roles deleted' });
});

module.exports = router;
