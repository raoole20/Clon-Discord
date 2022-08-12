const jwt = require('jsonwebtoken')

const config = process.env

exports.verifyTokenSocket = (socket, next) => {
    const token = socket.handshake.auth?.token
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY)
        socket.user = decoded
    } catch (error) {
        const socketError = new Error('NOT AUTHORIZED')
        return next(socketError)
    }

    next()
}