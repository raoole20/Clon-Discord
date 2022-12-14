const connectedUsers = new Map()

exports.addNewConnectedUser = ({ socketId, userId }) => {
    connectedUsers.set( socketId, { userId } )
}


exports.removeConnectedUser = (socketId) => {
    if(connectedUsers.has(socketId)) {
        connectedUsers.delete(socketId)
    }
}
