//external imports
const mongoose = require('mongoose');

//schema
const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
});

//model
const Department = mongoose.model('Department', departmentSchema);
module.exports = Department;
