//external imports
const express = require('express');

//internal imports
const { login, register } = require('../controllers/loginController');
const { loginValidator, loginValidationHandler } = require('../middleware/user/loginValidators');
const {
    registerValidator,
    registerValidationHandler,
} = require('../middleware/user/registerValidator');
const { checkLogin, checkRole } = require('../middleware/common/checkLogin');

const router = express.Router();

router.post('/login', loginValidator, loginValidationHandler, login);
router.post(
    '/register/:department/:employeePost',
    registerValidator,
    registerValidationHandler,
    register
); //check for logged in user and role

module.exports = router;
