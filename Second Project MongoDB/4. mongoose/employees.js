const mongoose = require("mongoose")

const mySchema = new mongoose.Schema(
    {
        first_name: String,
        last_name: String,
        email: String,
        gender: String,
        address: String,
    }
);

module.exports = mongoose.model('employees', mySchema, 'employees')