// requiring npm 'mongoose'
const mongoose = require('mongoose')

// assigning mongoose.Schema to a single word 'Schema'
const Schema = mongoose.Schema

// making schema for 'passenger'
const driverSchema = new Schema({
    name: {
        type: String, required: true
    },
    regNo: {
        type: String, required: true
    },
    number: {
        type: Number, required: true
    },
    school: {
        type: String, required: true
    },
    route: {
        type: String, required: true
    },
    user_id: {
        type: String, required: true, unique: true
    }
}, { timestamps: true })

// exporting model
module.exports = mongoose.model('Driver', driverSchema)