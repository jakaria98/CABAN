//external imports
const express = require('express');
const router = express.Router();

//internal imports
const { getAllDepartment, addDepartment, updateDepartment } = require('../controllers/departmentController');
const {
    departmentValidator,
    departmentValidationHandler,
} = require('../middleware/department/departmentValidators');
const { checkLogin, checkRole } = require('../middleware/common/checkLogin');

//get all department
router.get('/', getAllDepartment); //checkLogin, checkRole('admin'),

//add department
router.post('/', departmentValidator, departmentValidationHandler, addDepartment);

//update department
router.put('/:id', departmentValidator, departmentValidationHandler, updateDepartment);

module.exports = router;
