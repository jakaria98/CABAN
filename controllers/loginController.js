//internal imports
const User = require('../models/Employee');

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // 1) Check if email and password exist
        if (!email || !password) {
            return next(new AppError('Please provide email and password!', 400));
        }
        // 2) Check if user exists && password is correct
        const user = await User.findOne({ email }).select('+password');
        if (!user || !(await user.correctPassword(password, user.password))) {
            return next(new AppError('Incorrect email or password', 401));
        }
        // 3) If everything ok, send token to client
        createSendToken(user, 200, res);
    } catch (error) {
        next(error);
    }
}
const register = async (req, res, next) => {
    try {
        const { name, email, password, passwordConfirm } = req.body;
        const newUser = await User.create({
            name,
            email,
            password,
            passwordConfirm
        });
        createSendToken(newUser, 201, res);
    } catch (error) {
        next(error);
    }
}
const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);
    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user
        }
    });
}
const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}
module.exports = {
    login,
    register
}   
