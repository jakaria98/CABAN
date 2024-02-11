//external imports
const express = require('express');

//internal imports
const { login, register, logout, getAllUsers } = require('../controllers/loginController');
const { loginValidator, loginValidationHandler } = require('../middleware/user/loginValidators');
const {
    registerValidator,
    registerValidationHandler,
} = require('../middleware/user/registerValidator');
const { checkLogin, checkRole } = require('../middleware/common/checkLogin');

const router = express.Router();

//login routes
router.post('/login', loginValidator, loginValidationHandler, login);

//register routes
router.post(
    '/register',
    checkLogin,
    checkRole('admin'),
    registerValidator,
    registerValidationHandler,
    register
); //check for logged in user and role

//logout routes
router.post('/logout', logout);

//get all users
router.get('/all', getAllUsers);

module.exports = router;
