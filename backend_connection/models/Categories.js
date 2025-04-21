const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
    Id:Number,
    Name:String,
    CategoryId:Number
});

module.exports = mongoose.model('Categories', categoriesSchema);
