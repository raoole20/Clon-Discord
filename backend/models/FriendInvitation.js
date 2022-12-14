const mongoose = require("mongoose")

const Schema = mongoose.Schema

const friendInvitation = new Schema({
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    senderId: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
})

module.exports = mongoose.model("FriendInvitation", friendInvitation)