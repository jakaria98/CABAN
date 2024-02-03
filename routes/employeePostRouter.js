//external imports
const express = require('express');

//internal imports
const { addEmployeePost, getEmployeePosts } = require('../controllers/employeePostController');
const {
    employeePostValidators,
    handleEmployeePostValidationErrors,
} = require('../middleware/employeePost/employeePostValidators');
const { checkLogin, checkRole } = require('../middleware/common/checkLogin');

const router = express.Router();

//add employee post
router.post(
    '/:department',
    employeePostValidators,
    handleEmployeePostValidationErrors,
    addEmployeePost
);

//get employee posts
router.get('/', getEmployeePosts);

module.exports = router;
