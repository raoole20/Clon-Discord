const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const postLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      email,
    });
    if (!user) return res.status(404).send("user not found");

    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) return res.status(402).send("password incorrect");

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: "24h",
      }
    );

    return res.status(200).send({
      msg: "login succefull",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      msg: "Error ocurreted. Plis try later",
      error,
    });
  }
};

module.exports = postLogin;
