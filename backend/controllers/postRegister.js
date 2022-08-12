const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const user = require("../models/user");

const postRegister = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const isExistUser = await user.exists({ email })
    if( isExistUser ) return res.status(409).send("E-mail already in use.")

    const encryptedPassword = await bcrypt.hash(password, 10)

    const newUser = await user.create({
        username,
        email, 
        password: encryptedPassword
    })

    if( !newUser ) return res.status(500).send("Ups error occured. Please try again more later")

    const token = jwt.sign({
      userId: newUser._id,
      email: newUser.email,
    }, process.env.TOKEN_KEY,{
      expiresIn: "24h"
    } )

    return res.status(200).send({
        msg: "user created success",
        token, 
        newUser
    })
  } catch (error) {
    return res.status(500).send("Error occured. Please try again");
  }
};

module.exports = postRegister;
