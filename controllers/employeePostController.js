//external imports
const createError = require('http-errors');

//internal imports
const EmployeePost = require('../models/EmployeePost');
const Department = require('../models/Department');

//add employeePost
const addEmployeePost = async (req, res, next) => {
    const { title } = req.body;
    const { department } = req.params;
    try {
        //check if department exists
        const dept = await Department.findOne({ name: department });
        if (!dept) {
            createError(404, 'Department not found');
        } else {
            //check if employee post already exists
            const employeePostExists = await EmployeePost.findOne({ title, department });
            if (employeePostExists) {
                createError(400, 'Employee post already exists');
            } else {
                const employeePost = new EmployeePost({ title, department });
                await employeePost.save();
                res.status(201).json({
                    message: 'success added new employee post',
                });
            }
        }
    } catch (error) {
        createError(500, 'Server error');
    }
};

//get all employees
const getEmployeePosts = async (req, res, next) => {
    const { department } = req.params;
    try {
        const employeePosts = await EmployeePost.find({ department });
        res.status(200).json({
            employeePosts,
        });
    } catch (error) {
        createError(500, 'Server error');
    }
};

module.exports = { addEmployeePost };
