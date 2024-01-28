//external imports
const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const bcrypt = require('bcrypt');

//internal imports
const User = require('../models/Employee');

//login controller
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        //check if email and password exist
        const user = await User.findOne({ email });
        if (!user) {
            throw createError(401, 'Invalid credentials');
        } else {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                throw createError(401, 'Invalid credentials');
            } else {
                const userObject = {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    role: user.role,
                    employeeId: user.employeeId,
                    status: user.status,
                };
                createSendToken(userObject, 200, res);
            }
        }
    } catch (error) {
        throw createError(500, 'Server Error');
    }
};

//register controller
const register = async (req, res, next) => {
    try {
        const { firstName, password, lastName, email, phoneNumber, employeeId, role, status } =
            req.body;
        console.log(req.body);
        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            firstName,
            lastName,
            email,
            phoneNumber,
            employeeId,
            role,
            status,
            ...req.params,
            password: hashedPassword,
        });
        user = await newUser.save();
        res.status(201).json({
            message: 'success',
            user,
        });
    } catch (error) {
        throw createError(500, 'Server Error');
    }
};

//create and send token and save in cookie
const createSendToken = (user, statusCode, res) => {
    const token = signToken(user);
    //set cookie in httpOnly cookie
    res.cookie(process.env.COOKIE_NAME, token, {
        httpOnly: true,
        maxAge: process.env.JWT_EXPIRES_IN,
        signed: true,
    });
    // set locals
    res.locals.loggedInUser = userObject;
    res.status(statusCode).json({
        message: 'success',
        token,
    });
};

//sign token
const signToken = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

//logout
const logout = (req, res, next) => {
    res.clearCookie(process.env.COOKIE_NAME);
};
module.exports = {
    login,
    register,
    logout,
};
