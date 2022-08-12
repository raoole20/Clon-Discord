const { addNewConnectedUser } = require("../serverStore")

exports.newConnectionHandler = async ( socket, io ) => {
    const userDetails = socket.user

    addNewConnectedUser({
        socketId: socket.id,
        userId: userDetails.Id
    })
}