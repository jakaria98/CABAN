const createError = require('http-errors');
const Department = require('../models/Department');

// Controller for getting all departments
const getAllDepartment = async (req, res, next) => {
    try {
        // Get all departments from the database
        const departments = await Department.find();
        res.status(200).json(departments);
    } catch {
        next(error);
    }
};

// Controller for adding a new department
const addDepartment = async (req, res, next) => {
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
        next(error);
    }
};

// Controller for updating a department by ID
const updateDepartment = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, postings: newPostings } = req.body;

        // Find the existing department by ID
        const existingDepartment = await Department.findById(id);

        // Check if the department with the given ID exists
        if (!existingDepartment) {
            throw createError(404, 'Department not found');
        }

        // Add new postings to the existing postings
        existingDepartment.postings = [...existingDepartment.postings, ...newPostings];

        // Update other properties
        existingDepartment.name = name || existingDepartment.name;

        // Save the updated department to the database
        const updatedDepartment = await existingDepartment.save();

        res.status(200).json(updatedDepartment);
    } catch {
        next(error);
    }
};

module.exports = { addDepartment, updateDepartment, getAllDepartment };
