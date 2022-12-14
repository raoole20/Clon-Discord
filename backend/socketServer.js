const { verifyTokenSocket } = require('./middleware/authSocket')
const { newConnectionHandler } = require('./socketHandler/newConnectionHandler')


/**
 * funcion para registrar una nueva conexion socket
 * @param {Express} server instancia de nuestro server creado con express
 */
exports.registerSokectServer = server => {

    const io = require('socket.io')(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        }
    })


    io.use( (socket, next) => {
        verifyTokenSocket( socket, next )
    })

    // iniciar conxion 
    io.on('connection', socket => {
        console.log("[LOG] User connected to socket - id: " + socket.id)
        newConnectionHandler(socket, io)
    })
}