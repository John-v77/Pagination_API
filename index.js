const express = require('express')
const app = express()

const dotenv = require('dotenv')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const mongoose = require('mongoose')

const appzSchema = require('./models/app-model')


mongoose
    .connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology:true})
    .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch((err) => console.error('Error connecting to MongoDB', err))


//Seeding the data base

const db = mongoose.connection
db.once('open', async ()=>{
    if(await appzSchema.countDocuments().exec() > 0) return

    for(i=0; i<51; i++){
        await appzSchema.create({
            name:`my-app-0${i+1}`
        })
    }
})

 

app.get('/GetAllapps', async(req, res, next) => {

    let results = await appzSchema.find({})
    res.json(results)
})



app.listen(PORT, () => console.log('Listening to port', PORT))