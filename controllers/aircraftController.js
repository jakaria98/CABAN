const Aircraft = require('../models/Aircraft');
const createError = require('http-errors');

const addAircraft = async (req, res, next) => {
    try {
        const aircraft = new Aircraft(req.body);
        await aircraft.save();
        res.status(201).json(aircraft);
    } catch (error) {
        createError(400, 'Aircraft not created');
    }
};

const getAircrafts = async (req, res, next) => {
    try {
        const aircrafts = await Aircraft.find();
        res.status(200).json(aircrafts);
    } catch (error) {
        createError(400, 'Aircrafts not found');
    }
};

const updateAircraft = async (req, res, next) => {
    try {
        const aircraft = await Aircraft.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!aircraft) {
            return res.status(404).json('Aircraft not found');
        }
        res.status(200).json(aircraft);
    } catch (error) {
        createError(400, 'Aircraft not updated');
    }
};

module.exports = { addAircraft, getAircrafts, updateAircraft };
