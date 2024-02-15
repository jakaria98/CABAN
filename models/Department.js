//external imports
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema
const departmentSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    postings: [
        {
            name: {
                type: String,
                trim: true
            },
        }
    ]
});

//model
const Department = mongoose.model('Department', departmentSchema);
module.exports = Department;
