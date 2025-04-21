const mongoose = require('mongoose');

const profilesSchema = new mongoose.Schema({
    Id:Number,
    FullName:String,
    ContactNumber:Number,
    Address:String,
    Gender:String,
    DateOfBirth:String,
    ProfilePictureFileName:String,
    UserId:Number,
    EmployeeId:Number
});

module.exports = mongoose.model('Profiles', profilesSchema);
