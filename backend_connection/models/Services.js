const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
    Id:Number,
    Name:String,
    Price:Number,
    Description:String,
    PictureFileName:String,
    CategoryId:Number
});

module.exports = mongoose.model('Services', servicesSchema);
