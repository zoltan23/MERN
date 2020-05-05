const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Client = new Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('clients', Client)