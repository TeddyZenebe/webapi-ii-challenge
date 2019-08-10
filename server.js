const express = require('express')
const dbRouter = require('./db-router.js')

const server = express()
server.use(express.json())
server.use('/api/posts', dbRouter)

server.get('/', (req, res) => {
  res.send(`
    <h2>Posts and Comments API</h>
    <p>get two api with CRUD functionality</p>
  `)
})

module.exports = server