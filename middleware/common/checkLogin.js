const jwt = require('jsonwebtoken');
const createError = require('http-errors');

// auth guard to protect routes that need authentication
const checkLogin = (req, res, next) => {
    try {
        // check if token exists
        let cookies = Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;
        if (cookies) {
            token = cookies[process.env.COOKIE_NAME];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            res.locals.loggedInUser = decoded;
            next();
        } else {
            req.user = null;
            throw createError(401, 'You need to login to access this route');
        }
    } catch (error) {
        createError(500, 'Server Error');
    }
};

// guard to protect routes that need role based authorization

const checkRole = (role) => {
    return (req, res, next) => {
        if (req.user.role === role) {
            next();
        } else {
            throw createError(403, 'You are not authorized to access this route');
        }
    };
};

module.exports = {
    checkLogin,
    checkRole,
};
