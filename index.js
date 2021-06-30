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


app.get('/apps', async(req, res, next) => {

        const page = req.query.page ? parseInt(req.query.page) : 1

        const by = (req.query.by === 'id' || req.query.by === 'name') ? req.query.by : undefined
        const start = req.query.start - 1
        const end = req.query.end - 1 ? req.query.end : (appzSchema.countDocuments().exec() - 1)
        const max = req.query.max ? parseInt(req.query.max) : 50

        const order = req.query.order === 'asc' ? 1 
                        : req.query.order === 'des' ? -1 
                        : 0
    

        const startIndex = (page - 1) * max
        const endIndex = page * max
        const results = {}
        
        if(startIndex <  await appzSchema.countDocuments().exec()){
            results.next = {
            page: page+1,
            limit: max
            }
        }

        if(startIndex > 0){
            results.previous = {
                page: page-1,
                limit: max
            }
        }

    results.results = await appzSchema.find({}).sort({"name":order}).skip(startIndex).limit(max)
    res.json(results)
})


app.listen(PORT, () => console.log('Listening to port', PORT))