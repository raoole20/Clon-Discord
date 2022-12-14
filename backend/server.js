require('dotenv').config()
const http = require('http')

const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')

const authRoutes = require('./routers/auth')
const indexRoutes = require('./routers/index')
const friendRoute = require('./routers/friend')
// socket
const { registerSokectServer } = require('./socketServer')

const PORT = process.env.PORT || 8080
const app = express()

app.use( express.json() )
app.use( cors() )

// routes
app.use('/index', indexRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/friend-invitation', friendRoute)

const server = http.createServer(app)
//reegistrando sockect
registerSokectServer(server)

mongoose.connect(process.env.MONGO_URL).then( ()=>{
    console.log('[SERVER] successfully connected to the database')
    server.listen(PORT, ()=>{
        console.log("[SERVER] http://localhost:" + PORT )
    } )  
}).catch( err => {
    console.log('databases connection falied. Server Not started')
})
