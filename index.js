// external imports
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// internal imports
const loginRoute = require('./routes/loginRoute');
const departmentRouter = require('./routes/department');
const employeeTypeRouter = require('./routes/employeePost');

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/user', loginRoute);
app.use('/api/department', departmentRouter);
app.use('/api/employeeType', employeeTypeRouter);


//database connection
mongoose.connect(process.env.DB_CONNECT).then(() => {
    console.log('Database connected successfully');
}).catch((err) => {
    console.log(err);
}
);

//server connection
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
