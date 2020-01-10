const express = require('express')
const server = express()
const middleware = require('./middleware')
const routes = require('./routes')

server.use(express.json())
middleware(server)
routes(server)

server.get("/", (req, res, next) => {
  server.send("<h2>I am your server and I have life!</h2>")
})

server.use((req, res, next) => {
  res.status(404).json({ message: "Well, you juked when you should have jived."})
})

server.use((err, req, res, next) => {
  res.status(500).json({ message: "Life as we know it has ended, but in reality the server malfunctioned and you are okay."})
})

module.exports = server