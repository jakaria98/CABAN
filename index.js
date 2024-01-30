// external imports
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
// route imports
const loginRoute = require('./routes/loginRouter');
const departmentRouter = require('./routes/departmentRouter');
const employeeTypeRouter = require('./routes/employeePostRouter');

//error handler import
const errorHandler = require('./middleware/common/errorHandler');

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS for all routes
app.use(cors());

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//routes
app.use('/api/user', loginRoute);
app.use('/api/department', departmentRouter);
app.use('/api/employeePost', employeeTypeRouter);

//error handler
app.use(errorHandler);

//database connection
mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((err) => {
        console.log(err);
    });

//server connection
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
