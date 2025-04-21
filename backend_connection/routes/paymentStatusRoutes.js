const express = require('express');
const router = express.Router();
const PaymentStatus = require('../models/PaymentStatus');

router.post('/', async (req, res) => {
    const paymentStatus = new PaymentStatus(req.body);
    await paymentStatus.save();
    res.send(paymentStatus);
});

router.get('/', async (req, res) => {
    const paymentStatus = await PaymentStatus.find();
    res.send(paymentStatus);
});


router.put('/:id', async (req, res) => {
    const paymentStatus = await PaymentStatus.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(paymentStatus);
});

router.delete('/:id', async (req, res) => {
    await PaymentStatus.findByIdAndDelete(req.params.id);
    res.send({ message: 'Payment Status deleted' });
});

module.exports = router;
