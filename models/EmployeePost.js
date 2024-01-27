//external imports
const mongoose = require('mongoose');

//schema
const employeePostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    department: String,
});
const EmployeePost = mongoose.model('EmployeePost', employeePostSchema);
module.exports = EmployeePost;
