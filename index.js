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


    
// const appz = [
//     {id:1, name:'my-app-001'},
//     {id:2, name:'my-app-002'},
//     {id:3, name:'my-app-003'},
//     {id:4, name:'my-app-004'},
//     {id:5, name:'my-app-005'},
//     {id:6, name:'my-app-006'},
//     {id:7, name:'my-app-007'},
//     {id:8, name:'my-app-008'},
//     {id:9, name:'my-app-009'},
//     {id:10, name:'my-app-010'},
//     {id:11, name:'my-app-011'},
//     {id:12, name:'my-app-012'},
//     {id:13, name:'my-app-013'},
//     {id:14, name:'my-app-014'},
//     {id:15, name:'my-app-015'},
//     {id:16, name:'my-app-016'},
// ]

app.get('/GetAllapps', async(req, res, next) => {

    let results = await appzSchema.find({})
    res.json(results)
})


//Function for paginated results
// function paginatedResults(model){
//     return async(req, res, next) => {

//         const page = req.query.page ? parseInt(req.query.page) : 1
//         const by = (req.query.by === 'id' || req.query.by === 'name') ? req.query.by : undefined
//         const start = req.query.start - 1
//         const end = req.query.end - 1 ? req.query.end : (appz.length-1)
//         const max = req.query.max ? parseInt(req.query.max) : 50
//         const order = (req.query.order === 'asc' || req.query.order === 'des') ? req.query.order : undefined
    

//         const startIndex = (page - 1) * max
//         const endIndex = page * max


//         console.log('page',page,
//                     'by', by,
//                     'start', start,
//                     'end', end,
//                     'max', max,
//                     'order', order)

        
        
//     }
// }



app.listen(PORT, () => console.log('Listening to port', PORT))