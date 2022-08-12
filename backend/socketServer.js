const { authSocket } = require('./middleware/authSocket')
const { newConnectionHandler } = require('./socketHandler/newConnectionHandler')

exports.registerSokectServer = server => {

    const io = require('socket.io')(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        }
    })

    io.use( (socket, next) => {
        authSocket( socket, next )
    })

    io.on('connection', client => {
        console.log('conexion ready')
        client.on('event', data => { /* … */ });
        client.on('disconnect', () => { /* … */ });

        // new connection handler
        newConnectionHandler(socket, io)
    })
    
}