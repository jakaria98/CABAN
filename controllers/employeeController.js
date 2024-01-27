//internal imports
const Employee = require('../models/Employee');

//add employee
const addEmployee = async (req, res, next) => {
    const { firstName, lastName, email, phoneNumber, employeeId,role, status, password, department, employeePost } = req.body;
    try {
       
    } catch (error) {
        console.log(error);
    }
}
module.exports = { addEmployee };
