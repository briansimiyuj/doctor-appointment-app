import express from "express"
import http from "http"
import { Server } from "socket.io"
import cors from "cors"

const app = express()

app.use(cors())

const server = http.createServer(app),
      io = new Server(server, {
          cors:{
              origin: "http://localhost:3000",
              methods: ["GET", "POST"]
          }
      })

const rooms = new Map()

io.on("connection", (socket) =>{

    console.log(`User connected: ${socket.id}`)

    socket.on("join-room", ({ room }) =>{

        console.log(`User ${socket.id} joined room ${room}`)

        socket.join(room)

        if(!rooms.has(room)){

            rooms.set(room, new Set())

        }

        rooms.get(room).add(socket.id)

        socket.to(room).emit("user-joined", {
            userID: socket.id,
            room: room
        })

        console.log(`Room ${room} now has ${rooms.get(room).size} user(s)`)

    })

    socket.on("offer", ({ offer, room }) =>{

        console.log(`Forwarding offer from ${socket.id} to room ${room}`)

        socket.to(room).emit("offer", { offer, from: socket.id })

    })

    socket.on("answer", ({ answer, room, to }) =>{

        console.log(`Forwarding answer from ${socket.id} to room ${room}`)

        if(to){

            io.to(to).emit("answer", { answer, from: socket.id })

        }else{

            socket.to(room).emit("answer", { answer, from: socket.id })

        }

    })

    socket.on("ice-candidate", ({ candidate, room }) =>{

        console.log(`Forwarding ICE candidate from ${socket.id} to room ${room}`)

        socket.to(room).emit("ice-candidate", { candidate, from: socket.id })

    })

    socket.on("leave-room", ({ room }) =>{

        console.log(`User ${socket.id} leaving room ${room}`)

        handleUserLeaving(socket, room)

    })

    socket.on("disconnect", () =>{

        console.log(`User ${socket.id} disconnected`)

        rooms.forEach((sockets, room) =>{

            if(sockets.has(socket.id)){

                handleUserLeaving(socket, room)

            }

        })

    })

})

function handleUserLeaving(socket, room){

    if(rooms.has(room)){

        rooms.get(room).delete(socket.id)

        if(rooms.get(room).size === 0){

            rooms.delete(room)

            console.log(`Deleted empty room ${room}`)

        }else{

            console.log(`Room ${room} now has ${rooms.get(room).size} user(s)`)

        }

    }

    socket.to(room).emit("user-left", { userID: socket.id })

    socket.leave(room)

}

const PORT = 3001

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))