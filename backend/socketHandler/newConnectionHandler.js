const { addNewConnectedUser } = require("../serverStore")
const  updateInvitation =  require("./updates/friends")
const  updateFriends  =  require("./updates/updateFriendsLIst")

exports.newConnectionHandler = async ( socket, io ) => {
    const userDetails = socket.user

    addNewConnectedUser({
        socketId: socket.id,
        userId: userDetails.userId
    })

    updateInvitation(userDetails.userId)
    updateFriends(userDetails.userId)
}