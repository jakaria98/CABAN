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
        const user = await User.findOne({ email: email });
        if (!user) {
            throw createError(401, 'Invalid Credentials');
        } else {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                throw createError(401, 'Invalid Credentials');
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
        next(error);
    }
};

//create and send token and save in cookie
const createSendToken = (user, statusCode, res) => {
    const token = signToken(user);

    //set cookie in httpOnly cookie
    res.cookie(process.env.COOKIE_NAME, `Bearer ${token}`, {
        httpOnly: true,
        maxAge: parseInt(process.env.JWT_EXPIRES_IN),
        signed: true,
    });
    res.status(statusCode).json({
        token: `Bearer ${token}`,
    });
};

//sign token
const signToken = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

//register controller
const register = async (req, res, next) => {
    try {
        const {
            firstName,
            password,
            lastName,
            email,
            phoneNumber,
            employeeId,
            role,
            status,
            department,
            employeePost,
        } = req.body;
        //check if user exist

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
            department,
            employeePost,
            password: hashedPassword,
        });
        user = await newUser.save();
        const userObject = {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            employeeId: user.employeeId,
            department: user.department,
            employeePost: user.employeePost,
            status: user.status,
        };
        res.status(201).json({
            message: 'success',
            userObject,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

//logout
const logout = (req, res, next) => {
    let cookies = Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;
    console.log(cookies);
    if (cookies) {
        token = cookies[process.env.COOKIE_NAME];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
    }
    // res.clearCookie(process.env.COOKIE_NAME);
    // res.status(200).json({
    //     message: 'success',
    // });
};

//get all users
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find().select('-password -__v -_id');
        res.status(200).json({
            users,
        });
    } catch (error) {
        next(error);
    }
};
module.exports = {
    login,
    register,
    logout,
    getAllUsers,
};
