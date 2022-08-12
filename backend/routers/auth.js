const express = require('express')
const Joi = require('joi')
const validator = require('express-joi-validation').createValidator({})

const authControllers = require('../controllers/authControllers')

const route = express.Router()

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    password: Joi.string().min(6).max(12).required(),
    email: Joi.string().email().required(),
})

const loginSchema = Joi.object({
    password: Joi.string().min(6).max(12).required(),
    email: Joi.string().email().required(),
})

route.post('/register', validator.body(registerSchema), authControllers.controllers.postRegister)
route.post('/login',    validator.body(loginSchema), authControllers.controllers.postLogin)

module.exports = route