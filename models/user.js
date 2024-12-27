const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        index:true
    },
    username:String,
    email:String,
    password:String,
    createdAt:Date
})



module.exports = mongoose.model('user',userSchema)