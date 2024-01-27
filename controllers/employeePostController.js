//external imports
const { createError } = require('http-errors');

//internal imports
const EmployeePost = require('../models/EmployeePost');

//add employeePost

const addEmployeePost = async (req, res, next) => {
    const { title, department } = req.body;
    try {
        const employeePost = new EmployeePost({ title, department });
        await employeePost.save();
        res.status(201).json({
            message: 'success added new employee post',
        });
    } catch (error) {
        createError(500, 'Server error');
    }
};

module.exports = { addEmployeePost };
