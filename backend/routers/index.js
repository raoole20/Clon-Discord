const express = require('express')
const { verifyToken } = require('../middleware/auth')

const route = express.Router()

route.get('/', verifyToken, (req, res)=>{
    res.send({
        msg: 'the reques is ok'
    })
})

module.exports = route