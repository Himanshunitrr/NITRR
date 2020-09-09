const express = require("express")
const path = require("path")
const socketio = require("socket.io")
const http = require("http")

const app = express()
const server = http.createServer(app)
const io = socketio(server)
/* // Set static folder
app.use(express.static(path.join(__dirname, "Components"))) */

// Run when client connects 
io.on("connection", socket => [
  console.log("New WS Connection")
])
const PORT = 4000 || process.env.PORT

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))