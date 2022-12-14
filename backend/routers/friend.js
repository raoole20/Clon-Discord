const express = require('express')
const Joi = require('joi')
const validator = require('express-joi-validation').createValidator({})

const {verifyToken: auth} = require("../middleware/auth")
const { controllers } = require("../controllers/addfriend/friendControllers")
const router = express.Router()

const postFriendInvitationSchema = Joi.object({
    targetMailAddress: Joi.string().email()
})

router.post(
    '/invite', 
    auth, 
    validator.body(postFriendInvitationSchema), 
    controllers.postInvite
)

module.exports = router