const User = require("../../models/user");
const Invitation = require("../../models/FriendInvitation");
const friendsUpdate = require("../../socketHandler/updates/friends");
const FriendInvitation = require("../../models/FriendInvitation");

const postInvite = async (req, res) => {
  const { targetMailAddress } = req.body;
  const { email, userId } = req.user;

  // check if friend that we would like to invite is not user
  if (email.toLowerCase() === targetMailAddress.toLowerCase()) {
    return res.status(409).send("Sorry you cannot become friend with yourself");
  }

  const targetUser = await User.findOne({
    email: targetMailAddress,
  });

  if (!targetUser) {
    return res
      .status(404)
      .send(`Friend of ${targetMailAddress} has no been found`);
  }

  // check if invitation has been already send
  const invitationAlradyRecived = await Invitation.findOne({
    senderId: userId,
    receiverId: targetUser._id,
  });

  if (invitationAlradyRecived) {
    return res.status(409).send("Invitation has been already send");
  }

  // check if the user whuch we would like to invite is already our friend
  const usersAlreadyFriends = targetUser.friends.find(
    (f) => f.toString() === userId.toString()
  );

  if (usersAlreadyFriends) {
    return res
      .status(409)
      .send("Friend already added. Pleas check friend list");
  }

  const newInvitation = await Invitation.create({
    senderId: userId,
    receiverId: targetUser._id,
  });

  friendsUpdate(targetUser._id.toString());

  return res.status(201).send("Invitation has been sent");
};

const postAcept = async (req, res) => {
    try {
        const { id } = req.body;
        
        const invitation = await FriendInvitation.findById(id)

        if( !invitation ){
            return res.status(404).send('ERROR ocurr')
        }

        const { senderId, receiverId } = invitation

        // add firends to both users
        const senderUser = await User.findById(senderId)
        senderUser.friends = [ ...senderUser.friends, receiverId ];

        
        const receiverUser = await User.findById(receiverId)
        console.log("email receiveUser ",receiverUser.email)
        receiverUser.friends = [ ...receiverUser.friends, senderId ];

        await senderUser.save()
        await receiverUser.save()

        await FriendInvitation.findOneAndDelete(id).then( response => {
            friendsUpdate(senderId.toString());
            friendsUpdate(receiverId.toJSON())
        });

        // update list of friend 


        return res.status(200).send("Friend successfully added")
      } catch (error) {
        console.log("[ERROR /api/friend/accept] error", error);
        return res.status(500).send("algo salio mal por favor intentalo mas tarde")
      }
};
const postReject = async (req, res) => {
    try {
        const { id } = req.body;
        const { userId } = req.user;
    
        const invitationExists = await FriendInvitation.exists({
          _id: id,
        });
    
        if (invitationExists) {
          await Invitation.findOneAndDelete(id);
        }
    
        // update pending invitations
        friendsUpdate(userId);
        return res.status(200).send("Invitation reject")
      } catch (error) {
        console.log("[ERROR /api/friend/reject] error ");
        return res.status(500).send("algo salio mal por favor intentalo mas tarde")
      }
};

module.exports = {
  postInvite,
  postAcept,
  postReject,
};
