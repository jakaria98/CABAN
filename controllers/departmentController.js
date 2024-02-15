const createError = require('http-errors');
const Department = require('../models/Department');

// Controller for getting all departments
const getAllDepartment = async (req, res) => {
    try {
        // Get all departments from the database
        const departments = await Department.find();

        res.status(200).json(departments);
    } catch {
        createError(500, 'Internal Server Error');
    }
};

// Controller for adding a new department
const addDepartment = async (req, res) => {
    try {
        const { name, postings } = req.body;

        // Create a new department instance
        const newDepartment = new Department({
            name,
            postings: postings || [], // Assuming postings is an array, initialize with an empty array if not provided
        });

        // Save the new department to the database
        const savedDepartment = await newDepartment.save();

        res.status(201).json(savedDepartment);
    } catch (error) {
        createError(500, 'Internal Server Error');
    }
};

// Controller for updating a department by ID
const updateDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, postings } = req.body;

        // Find and update the department by ID
        const updatedDepartment = await Department.findByIdAndUpdate(
            id,
            { name, postings },
            { new: true } // Return the updated document
        );

        // Check if the department with the given ID exists
        if (!updatedDepartment) {
            createError(404, 'Department not found');
        }

        res.status(200).json(updatedDepartment);
    } catch {
        createError(500, 'Internal Server Error');
    }
};

module.exports = { addDepartment, updateDepartment , getAllDepartment};
