require('dotenv').config()
const http = require('http')

const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')

const authRoutes = require('./routers/auth')
const indexRoutes = require('./routers/index')

// socket
const { registerSokectServer } = require('./socketServer')

const PORT = process.env.PORT || 8080
const app = express()

app.use( express.json() )
app.use( cors() )

// routes
app.use('/index', indexRoutes)
app.use('/api/auth', authRoutes)

const server = http.createServer(app)
registerSokectServer()

mongoose.connect(process.env.MONGO_URL).then( ()=>{
    console.log('Connection to the database is successfully')
    server.listen(PORT, ()=>{
        console.log("[SERVER] http://localhost:" + PORT )
    } )  
}).catch( err => {
    console.log('databases connection falied. Server Not started')
})
