const express = require('express')
const Joi = require('joi')
const validator = require('express-joi-validation').createValidator({})

const {verifyToken: auth} = require("../middleware/auth")
const { controllers } = require("../controllers/addfriend/friendControllers")
const router = express.Router()

const postFriendInvitationSchema = Joi.object({
    targetMailAddress: Joi.string().email().required()
})

const decisionSchema = Joi.object({
    id: Joi.string().required()
})

router.post(
    '/invite', 
    auth, 
    validator.body(postFriendInvitationSchema), 
    controllers.postInvite
)

router.post(
    '/accept', 
    auth, 
    validator.body(decisionSchema), 
    controllers.postAcept
)

router.post(
    '/reject', 
    auth, 
    validator.body(decisionSchema), 
    controllers.postReject
)

module.exports = router