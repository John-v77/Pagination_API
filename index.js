const express = require('express')
const app = express()

const appz = [
    {id:1, name:'my-app-001'},
    {id:2, name:'my-app-002'},
    {id:3, name:'my-app-003'},
    {id:4, name:'my-app-004'},
    {id:5, name:'my-app-005'},
    {id:6, name:'my-app-006'},
    {id:7, name:'my-app-007'},
    {id:8, name:'my-app-008'},
    {id:9, name:'my-app-009'},
    {id:10, name:'my-app-010'},
    {id:11, name:'my-app-011'},
    {id:12, name:'my-app-012'},
    {id:13, name:'my-app-013'},
    {id:14, name:'my-app-014'},
    {id:15, name:'my-app-015'},
    {id:16, name:'my-app-016'},
]

app.get('/apps', (req, res) => {

    const by = req.query.by
    const start = req.query.start
    const end = req.query.end
    const max = req.query.max
    const order = req.query.order
    
    const resultApps = appz.slice(start, end)

    res.json(resultApps)
})

app.listen(5000, () => console.log('Listening to port', 5000))