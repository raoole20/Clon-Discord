const jwt = require('jsonwebtoken')

const config = process.env

exports.verifyTokenSocket = (socket, next) => {
    const token = socket.handshake.auth?.token
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY)
        socket.user = decoded
        return next()
    } catch (error) {
        const socketError = new Error('[ERROR] USER NOT AUTH')
        return next(socketError)
    }
} 