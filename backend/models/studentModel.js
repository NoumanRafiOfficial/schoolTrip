const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: {
        type: String, required: true
    },
    grade: {
        type: Number, required: true
    },
    age: {
        type: Number, required: true
    },
    number: {
        type: Number, required: true
    },
    school: {
        type: String, required: true
    },
    add: {
        type: String, required: true
    },
    user_id: {
        type: String, required: true, unique: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Student', studentSchema)