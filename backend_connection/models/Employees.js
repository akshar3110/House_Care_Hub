const mongoose = require('mongoose');

const employeesSchema = new mongoose.Schema({
    Id:Number,
    Password:String,
    Email:String,
    Area:String,
    WorkExperience:String,
    AdharCardNumber:String,
    AdharCardPhoto:String,
    DateOfJoning:String,
    DateOfResignation:String,
    IsActive:String,
    RoleId:Number
});

module.exports = mongoose.model('Employees', employeesSchema);
