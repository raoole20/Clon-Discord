const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  friends: [{
    type: mongoose.Schema.Types.ObjectId, ref: "user"
  }]
})

module.exports = mongoose.model("user", userSchema);
