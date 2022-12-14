const User = require("../../models/user")
const FriendInvitation = require("../../models/FriendInvitation")
const serverStore = require("../../serverStore")

const updateFriendsPendingInvitations = async ( userId ) => {
    try{
        const pendingInvitations = await FriendInvitation.find({
            receiverId: userId
        }).populate('senderId', '_id username mail')

        // find if user of specified userID has active connections 
        const reciverList = serverStore.getOnline(userId)
        const io = serverStore.getSockets()

        reciverList.forEach( reciver => {
            io.to(reciver).emit('friends-invitations', { 
                pendingInvitations: pendingInvitations ? pendingInvitations : []
            })
        })
    }catch(err){
        console.log(`[ERROR] error in update friends handler`)
    }
}

module.exports = updateFriendsPendingInvitations