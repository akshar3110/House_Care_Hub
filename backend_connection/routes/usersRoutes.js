const express = require('express');
const router = express.Router();
const User = require('../models/Users');

// Create Student
router.post('/', async(req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send(user);
});

// Read Students
router.get('/', async(req, res) => {
    const users = await User.find();
    res.send(users);
});

// Update Student
router.put('/:id', async(req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(user);
});

// Delete Student
router.delete('/:id', async(req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send({ message: 'User deleted' });
});

module.exports = router;