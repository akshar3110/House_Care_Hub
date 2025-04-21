const express = require('express');
const router = express.Router();
const Employees = require('../models/Employees');

// Create Student
router.post('/', async (req, res) => {
    const employees = new Employees(req.body);
    await employees.save();
    res.send(employees);
});

// Read Students
router.get('/', async (req, res) => {
    const employees = await Employees.find();
    res.send(employees);
});

// Update Student
router.put('/:id', async (req, res) => {
    const employees = await Employees.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(employees);
});

// Delete Student
router.delete('/:id', async (req, res) => {
    await Employees.findByIdAndDelete(req.params.id);
    res.send({ message: 'Employee deleted' });
});

module.exports = router;
