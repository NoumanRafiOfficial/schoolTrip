// requiring npm 'mongoose'
const mongoose = require('mongoose')

// assigning mongoose.Schema to a single word 'Schema'
const Schema = mongoose.Schema

// making schema for 'passenger'
const driverSchema = new Schema({
    // driver name
    name: {
        type: String,
        required: true
    },
    // driver vehicle reg. number
    regNo: {
        type: String,
        required: true
    },
    // driver phone
    number: {
        type: Number,
        required: true
    },
    // school name
    school: {
        type: String,
        required: true
    },
    // school route
    route: {
        type: String,
        required: true
    }
}, { timestamps: true })

// exporting model
module.exports = mongoose.model('Driver', driverSchema)