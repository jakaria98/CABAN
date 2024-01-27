//external imports
const express = require('express');

//internal imports
const { addEmployeePost } = require('../controllers/employeePostController');
const {
    employeePostValidators,
    handleEmployeePostValidationErrors,
} = require('../middleware/employeePost/employeePostValidators');

const router = express.Router();
router.post('/', employeePostValidators, handleEmployeePostValidationErrors, addEmployeePost);
module.exports = router;
