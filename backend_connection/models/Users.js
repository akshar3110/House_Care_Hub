const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    Id:Number,
    Email:String,
    Password:String,
    IsActive:String,
    Role_Id:Number
});

module.exports = mongoose.model('User', usersSchema);
