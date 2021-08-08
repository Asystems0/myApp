const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    location: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    updated: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('restaurantDB',restaurantSchema);