const mongoose = require('mongoose');

const rolesSchema = new mongoose.Schema({
    Id:Number,
    Name:String
});

module.exports = mongoose.model('Roles', rolesSchema);
