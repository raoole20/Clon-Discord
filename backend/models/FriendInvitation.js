const mongoose = require("mongoose")

const Schema = mongoose.Schema

const friendInvitation = new Schema({
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    senderId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
})

module.exports = mongoose.model("FriendInvitation", friendInvitation)