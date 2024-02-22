const mongoose = require('mongoose');

const aircraftSchema = new mongoose.Schema({
    aircraftType: {
        type: String,
        required: true,
        trim: true,
    },
    aircraftRegistration: {
        type: String,
        required: true,
        trim: true,
    },
    maxSeats: {
        type: Number,
        required: true,
    },
    maxFuel: {
        type: Number,
        required: true,
    },
    aircraftMaxPayload: {
        type: Number,
        required: true,
    },
});

const Aircraft = mongoose.model('Aircraft', aircraftSchema);

module.exports = Aircraft;
