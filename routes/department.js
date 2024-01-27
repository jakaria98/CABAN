//external imports
const express = require('express');
const router = express.Router();

//internal imports
const Department = require('../models/Department');
const { getAllDepartment, addDepartment } = require('../controllers/departmentController');

//get all department
router.get('/', getAllDepartment);

//add department
router.post('/', addDepartment);

module.exports = router;
