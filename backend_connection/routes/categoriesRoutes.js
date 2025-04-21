const express = require('express');
const router = express.Router();
const Categories = require('../models/Categories');

// Create Student
router.post('/', async (req, res) => {
    const categories = new Categories(req.body);
    await categories.save();
    res.send(categories);
});

// Read Students
router.get('/', async (req, res) => {
    const categories = await Categories.find();
    res.send(categories);
});

// Update Student
router.put('/:id', async (req, res) => {
    const categories = await Categories.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(categories);
});

// Delete Student
router.delete('/:id', async (req, res) => {
    await Categories.findByIdAndDelete(req.params.id);
    res.send({ message: 'Category deleted' });
});

module.exports = router;
