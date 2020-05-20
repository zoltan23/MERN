const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true }, 
        password: { type: String, required: true, select: false },
        role: { type: String, required: true, default: 'user', enum: ["user", "admin", "root"]}
    },
    { timestamps: true },
)

module.exports = mongoose.model('user_info', User)