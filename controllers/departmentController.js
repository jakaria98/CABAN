//internal imports
const Department = require('../models/Department');

//get all department
const getAllDepartment = async (req, res) => {
    try {
        const departments = await Department.find();
        res.status(200).json({ departments });
    } catch (error) {
        console.log(error);
    }
}

//add department
const addDepartment = async (req, res) => {
    const { name } = req.body;
    try {
        newDepartment = new Department({ name });
        await newDepartment.save();
       
    } catch (error) {
        console.log(error);
    }
}
module.exports = { getAllDepartment, addDepartment };
