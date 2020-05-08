const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Client = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('user_info', Client)