const express = require('express')
const dbRouter = require('./db-router.js')

const server = express()
server.use(express.json())
server.use('/api/posts', dbRouter)

server.get('/', (req, res)=>{
    res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `)
})

module.exports = server