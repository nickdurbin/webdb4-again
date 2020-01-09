const express = require('express')
const server = express()
const router = require("./routes")
const middleware = require("./middleware")

server.use(express.json())
server(middleware)
server(router)

server.get("/", (req, res) => {
  res.response("<h2>I am your server. Sanity check complete. Now, leave me alone!</h2>")
})

server.use((req, res, next) => {
  res.status(404).json({ message: "We have followed the fork in the path, but chose the wrong direction. Turn back!"})
})

server.use((err, req, res, next) => {
  res.status(500).json({ message: "The server has failed you. Please allow us to make it up to you."})
})

module.exports = server;