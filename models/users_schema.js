const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    id: {
        type: Number,
        require: true,
        unique: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    credit: {
        type: Number,
        require: true
    },
    birthday: {
        type: Date,
        require: true
    },
    age: {
        type: Number,
        min: 14,
        max: 120,
        require: true
    },
    updated: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('USERDB', userSchema);