//const { MONGO_SVR } = require('./.env')
const mongoose = require('mongoose')
const dotenv = require('dotenv')


dotenv.config()

console.log('process.env.MONGO_SVR', process.env.MONGO_SVR)

mongoose
    .connect(process.env.MONGO_SVR, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db