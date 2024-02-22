const { check, validationResult } = require('express-validator');

const aircraftValidator = [
    check('aircraftType').not().isEmpty().withMessage('Aircraft type is required'),
    check('aircraftRegistration').not().isEmpty().withMessage('Aircraft registration is required'),
    check('maxSeats').not().isEmpty().withMessage('Seat capacity is required'),
    check('maxFuel').not().isEmpty().withMessage('Fuel capacity is required'),
    check('aircraftMaxPayload').not().isEmpty().withMessage('Aircraft max payload is required'),
];

const aircraftValidationHandler = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: 'Validation failed',
            errors: errors.array(),
        });
    }
    next();
};

module.exports = { aircraftValidator, aircraftValidationHandler };
