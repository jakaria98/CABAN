//external imports
const { check, validationResult } = require('express-validator');

const loginValidator = [
    check('email').isEmail().withMessage('Please provide a valid email address'),
    check('password').not().isEmpty().withMessage('Password is required'),
];

const loginValidationHandler = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: 'Validation failed',
            errors: errors.array(),
        });
    }
    next();
}

module.exports = { loginValidator, loginValidationHandler };
