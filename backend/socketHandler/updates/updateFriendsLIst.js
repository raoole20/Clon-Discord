const User = require("../../models/user");
const serverStore = require("../../serverStore");

const updateFriendsList = async (userId) => {
  try {
    const receiverList = serverStore.getOnline(userId);
    if (receiverList.length == 0) {
      return;
    }

    const user = await User.findById(userId, { _id: 1, friends: 1 }).populate(
      "friends",
      "_id username email"
    );

    if (user) {
      const friendsList = user.friends.map((f) => ({
        id: f._id,
        email: f.email,
        username: f.username,
      }));

      // find active connections
      const io = serverStore.getSockets();

      receiverList.forEach((receiverId) => {
        io.to(receiverId).emit("friend-list", {
          friends: friendsList ? friendsList : [],
        });
      });
    }
  } catch (error) {
    console.log(`[ERROR] in update friends `, error);
  }
};

module.exports = updateFriendsList;
