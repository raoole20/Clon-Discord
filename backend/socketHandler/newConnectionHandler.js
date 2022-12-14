const { addNewConnectedUser } = require("../serverStore")
const  updateInvitation =  require("./updates/friends")
exports.newConnectionHandler = async ( socket, io ) => {
    const userDetails = socket.user

    addNewConnectedUser({
        socketId: socket.id,
        userId: userDetails.userId
    })

    updateInvitation(userDetails.userId)
}