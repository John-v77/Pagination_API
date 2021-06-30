const mongoose = require('mongoose')

const appzSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('appzSchema' , appzSchema)