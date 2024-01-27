const createError = require('http-errors');
const errorHandler = (err, req, res, next) => {
    if (err instanceof createError.HttpError) {
        res.status(err.statusCode).send(err.message);
    } else {
        res.status(500).send('Something went wrong');
    }
};
module.exports = errorHandler;
