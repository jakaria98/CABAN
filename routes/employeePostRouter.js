//external imports
const express = require('express');

//internal imports
const { addEmployeePost } = require('../controllers/employeePostController');
const {
    employeePostValidators,
    handleEmployeePostValidationErrors,
} = require('../middleware/employeePost/employeePostValidators');
const { checkLogin, checkRole } = require('../middleware/common/checkLogin');

const router = express.Router();
router.post(
    '/',
    checkLogin,
    checkRole(['admin']),
    employeePostValidators,
    handleEmployeePostValidationErrors,
    addEmployeePost
);
module.exports = router;
