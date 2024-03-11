const mongoose = require('mongoose')

const DatabaseSchema = mongoose.Schema({
    email:{type:String,},
    firstName:{type:String},
    lastName:{type:String},
    password:{type:String},
    UserName:{type:String},
    number:{type:String},
    country:{type:String},
},{timestamps:true,versionKey:false})

const profileModel = mongoose.model('users', DatabaseSchema)
module.exports = profileModel