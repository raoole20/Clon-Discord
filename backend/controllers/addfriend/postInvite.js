const User = require('../../models/user')
const Invitation = require('../../models/FriendInvitation')
const friendsUpdate = require('../../socketHandler/updates/friends')

const postInvite = async ( req, res ) => {
    const { targetMailAddress } = req.body
    const { email, userId } = req.user
    
    // check if friend that we would like to invite is not user
    if( email.toLowerCase() === targetMailAddress.toLowerCase() ){
        return res.status(409).send("Sorry you cannot become friend with yourself")
    }

    const targetUser = await User.findOne({
        email: targetMailAddress
    })

    if( !targetUser ) {
        return res.status(404).send(`Friend of ${targetMailAddress} has no been found`)
    }

    // check if invitation has been already send
    const invitationAlradyRecived = await Invitation.findOne({
        senderId: userId,
        receiverId: targetUser._id
    })

    if( invitationAlradyRecived) {
        return res.status(409).send("Invitation has been already send")
    }

    // check if the user whuch we would like to invite is already our friend
    const usersAlreadyFriends = targetUser.fiends.find( f => f.toString() === userId.toString() )

    if( usersAlreadyFriends ) {
        return res.status(409).send("Friend already added. Pleas check friend list")
    }

    const newInvitation = await Invitation.create({
        senderId: userId,
        receiverId: targetUser._id
    })

    friendsUpdate(targetUser._id.toString())

    return res.status(201).send("Invitation has been sent")
}

module.exports = postInvite