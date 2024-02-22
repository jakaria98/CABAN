const router = require('express').Router();
const { addAircraft, getAircraft, updateAircraft } = require('../controllers/aircraftController');
const { aircraftValidator, aircraftValidationHandler } = require('../middleware/aircraft/aircraftValidators');

router.post('/', aircraftValidator, aircraftValidationHandler, addAircraft);
router.get('/', getAircraft);
router.put('/:id', aircraftValidator, aircraftValidationHandler, updateAircraft);

module.exports = router;
