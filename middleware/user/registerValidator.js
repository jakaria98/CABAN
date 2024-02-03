// external imports
const createError = require('http-errors');
const { check, validationResult } = require('express-validator');

const registerValidator = [
    check('firstName')
        .isLength({ min: 1 })
        .withMessage('First name is required')
        .isAlpha('en-US', { ignore: '-' })
        .withMessage('Name must not contain anything other than alphabet')
        .trim(),

    check('lastName')
        .isLength({ min: 1 })
        .withMessage('Last name is required')
        .isAlpha('en-US', { ignore: ' -' })
        .withMessage('Name must not contain anything other than alphabet')
        .trim(),

    check('email').isEmail().withMessage('Invalid email address').trim(),

    check('password')
        .isStrongPassword()
        .withMessage(
            'Password must be at least 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol'
        ),

    check('confirmPassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw createError(400, 'Password does not match');
        }
        return true;
    }),

    check('employeeId').isLength({ min: 6 }).withMessage('Employee ID is required').trim(),
    check('department').isLength({ min: 1 }).withMessage('Select a Department').trim(),
    check('employeePost').isLength({ min: 1 }).withMessage('Select a Designation').trim(),
    check('role').isLength({ min: 1 }).withMessage('Select a Role').trim(),

    check('phoneNumber')
        .isLength({ min: 10, max: 10 })
        .withMessage('Phone number is required')
        .trim(),
];

const registerValidationHandler = (req, res, next) => {
    const errors = validationResult(req);
    const mappedErrors = errors.mapped();
    if (Object.keys(mappedErrors).length === 0) {
        next();
    } else {
        //response the errors
        res.status(400).json({
            message: 'Validation error',
            errors: mappedErrors,
        });
    }
};

module.exports = { registerValidator, registerValidationHandler };
