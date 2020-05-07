const { MONGO_SVR } = require('./atlas_creds')
const mongoose = require('mongoose')
console.log(MONGO_SVR)

mongoose
    .connect(MONGO_SVR, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db