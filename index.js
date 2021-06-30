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
        const start = req.query.start ? req.query.start - 1 : undefined
        const end = req.query.end ? req.query.end - 1 : undefined
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

        //Pagination logic  - 
        let stringBuilder = 'appzSchema.find({})'

        if(by) stringBuilder += `.sort({ ${by} : ${order} })`

        if(start) stringBuilder += `.skip(${start})`

        //-------------------------------
        if(end){
            if(start && (end > start)){
                //if #end is bigger then #max, #max will take precedence
                let limitZ = Math.min(max, end)
                stringBuilder += `.limit(${limitZ})`
                }
        }else{
            stringBuilder += `.limit(${max})`
        }
        //-------------------------------
        


        console.log("stringBuilder", stringBuilder)




    results.results = await eval(stringBuilder)
    // .sort({by:order}).skip(start).limit(max)
    res.json(results)
})


app.listen(PORT, () => console.log('Listening to port', PORT))