//external imports
const mongoose = require('mongoose');

//schema
const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
    },
    employeeId: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'analyst'],
        default: 'user',
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
    password: {
        type: String,
        required: true,
    },
    department: String,
    employeePost: String,
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
