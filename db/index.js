const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

mongoose
    .connect(process.env.MONGO_SVR, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db