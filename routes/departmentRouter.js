//external imports
const express = require('express');
const router = express.Router();

//internal imports
const { getAllDepartment, addDepartment } = require('../controllers/departmentController');
const {
    departmentValidator,
    departmentValidationHandler,
} = require('../middleware/department/departmentValidators');
const { checkLogin, checkRole } = require('../middleware/common/checkLogin');

//get all department
router.get('/',checkLogin, checkRole(["Admin"]), getAllDepartment);

//add department
router.post('/', checkLogin, checkRole(["Admin"]),departmentValidator, departmentValidationHandler, addDepartment);

module.exports = router;
