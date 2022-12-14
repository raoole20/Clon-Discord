const connectedUsers = new Map()

let io

exports.setSocketInstance = (ioInstance) => { io = ioInstance }
exports.getSockets = () => io
exports.addNewConnectedUser = ({ socketId, userId }) => connectedUsers.set( socketId, { userId } )

exports.removeConnectedUser = (socketId) => {
    if(connectedUsers.has(socketId)) {
        connectedUsers.delete(socketId)
    }
}

exports.getOnline = (userId) => {
    const active = []

    connectedUsers.forEach( function (value, key) {
        if( value.userId === userId){
            active.push(key)
        }
    })

    return active
}