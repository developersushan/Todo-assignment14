const mongoose = require('mongoose')

const DatabaseSchema = mongoose.Schema({
    UserName:{type:String},
    TodoSubject:{type:String},
    TodoDescription:{type:String},
    TodoStatus:{type:String},
    TodoCreateDate:{type:Date},
    TodoUpdateDate:{type:Date},

},{timestamps:true,versionKey:false})

const TodoModel = mongoose.model('List', DatabaseSchema)
module.exports = TodoModel