//external imports
const express = require('express');

//internal imports
const { login, register } = require('../controllers/loginController');
const { loginValidator, loginValidationHandler } = require('../middleware/user/loginValidators');
const {
    registerValidator,
    registerValidationHandler,
} = require('../middleware/user/registerValidator');

const router = express.Router();

router.post('/login', loginValidator, loginValidationHandler, login);
router.post('/register', registerValidator, registerValidationHandler, register);

module.exports = router;
