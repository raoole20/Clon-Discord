const { removeConnectedUser } = require("../serverStore")

exports.disconnectHandler = socket => {
    removeConnectedUser(socket.id)
}