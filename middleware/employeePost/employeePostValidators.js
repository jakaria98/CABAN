const { check, validationResult } = require('express-validator');

const employeePostValidators = [check('title').not().isEmpty().withMessage('Title is required')];
const handleEmployeePostValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: 'Validation failed',
            errors: errors.array(),
        });
    }
    next();
};

module.exports = { employeePostValidators, handleEmployeePostValidationErrors };
