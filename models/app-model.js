const mongoose = require('mongoose')

const appzSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('appzSchema' , appzSchema)