//external imports
const createError = require('http-errors');

//internal imports
const Department = require('../models/Department');

//get all department
const getAllDepartment = async (req, res, next) => {
    try {
        const departments = await Department.find().select('-__v -_id');
        res.status(200).json({ departments });
    } catch (error) {
        next(error);
    }
};

//add department
const addDepartment = async (req, res, next) => {
    const { name } = req.body;
    try {
        newDepartment = new Department({ name });
        await newDepartment.save();
        res.status(200).json({ message: 'Department added successfully' });
    } catch (error) {
        next(error);
    }
};
module.exports = { getAllDepartment, addDepartment };
