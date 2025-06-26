const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    role: {
        type: String,
        enum: ['Admin', 'Project manager', 'Team member'],
        default: 'Team member'
    },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;