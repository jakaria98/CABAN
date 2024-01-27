//external imports
const express = require('express');
const router = express.Router();

//internal imports
const { getAllDepartment, addDepartment } = require('../controllers/departmentController');
const {
    departmentValidator,
    departmentValidationHandler,
} = require('../middleware/department/departmentValidators');

//get all department
router.get('/', getAllDepartment);

//add department
router.post('/', departmentValidator, departmentValidationHandler, addDepartment);

module.exports = router;
