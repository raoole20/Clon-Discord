const connectedUsers = new Map()

exports.addNewConnectedUser = ({ socketId, userId }) => {
    connectedUsers.set( socketId, { userId } )
}
