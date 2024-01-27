//external imports
const express = require('express');

//internal imports
const Employee = require('../models/Employee');
const { addEmployee } = require('../controllers/employeeController');

const router = express.Router();
router.post('/', addEmployee);
module.exports = router;
