const connectedUsers = new Map()

exports.addNewConnectedUser = ({ socketId, userId }) => {
    connectedUsers.set( socketId, { userId } )
    console.log('new connected users')
    console.log(connectedUsers)
}
