const { check, validationResult } = require('express-validator');

const departmentValidator = [
    check('name').not().isEmpty().withMessage('Department name is required'),
];

const departmentValidationHandler = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: 'Validation failed',
            errors: errors.array(),
        });
    }
    next();
};

module.exports = { departmentValidator, departmentValidationHandler };
