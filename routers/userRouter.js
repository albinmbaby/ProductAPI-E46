const express = require('express')
const userRouter = express.Router()
const {addUser,login}=require('../controllers/userController')

userRouter.post('/',addUser)
userRouter.post('/login',login)

module.exports = userRouter