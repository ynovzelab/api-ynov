const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    isAdmin: {
        type: Boolean
    },
    age: {
        type: Number
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);