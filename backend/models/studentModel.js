// requiring npm 'mongoose'
const mongoose = require('mongoose')

// assigning mongoose.Schema to a single word 'Schema'
const Schema = mongoose.Schema

// making schema for 'passenger'
const studentSchema = new Schema({
    // student name
    name: {
        type: String,
        required: true
    },
    // student grade (giving error in using identifier 'class')
    grade: {
        type: Number,
        required: true
    },
    // student age
    age: {
        type: Number,
        required: true
    },
    // student phone
    number: {
        type: Number,
        required: true
    },
    // father/ guardian name
    // guardian: {
    //     type: String,
    //     required: true
    // },
    // father/ guardian phone
    // guardianNumber: {
    //     type: Number,
    //     required: true
    // },
    // school name
    school: {
        type: String,
        required: true
    },
    // school address
    add: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, { timestamps: true })

// exporting model
module.exports = mongoose.model('Student', studentSchema)