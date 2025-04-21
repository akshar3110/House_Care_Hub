const mongoose = require('mongoose');

const areasSchema = new mongoose.Schema({
    Id:Number,
    AreaName:String,
    CityName:String,
    StateName:String,
    CountryName:String
});

module.exports = mongoose.model('Areas', areasSchema);
