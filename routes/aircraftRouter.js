const router = require('express').Router();
const { addAircraft, getAircrafts, updateAircraft } = require('../controllers/aircraftController');
const { aircraftValidator, aircraftValidationHandler } = require('../middleware/aircraft/aircraftValidators');

router.post('/', aircraftValidator, aircraftValidationHandler, addAircraft);
router.get('/', getAircrafts);
router.put('/:id', aircraftValidator, aircraftValidationHandler, updateAircraft);

module.exports = router;
