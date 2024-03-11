const TodoModel = require("../model/TodoModel")

exports.createTodo =(req,res)=>{

        let reqBody  = req.body 

        let UserName  = req.headers['username']
        let  TodoSubject = reqBody['TodoSubject']
        let  TodoDescription = reqBody['TodoDescription']
        let  TodoStatus = 'New'
        let  TodoCreateDate = Date.now()
        let  TodoUpdateDate = Date.now()

        let postBody ={
            UserName:UserName,
            TodoSubject:TodoSubject,
            TodoDescription:TodoDescription,
            TodoStatus:TodoStatus,
            TodoCreateDate:TodoCreateDate,
            TodoUpdateDate:TodoUpdateDate,
        }
        TodoModel.create(postBody ).then((result)=>{

                res.status(201).json({status:'success', data:result})
         }).catch((err)=>{
            res.status(404).json({status:err})
         })

}

exports.selectTodo=(req,res)=>{
    let UserName = req.headers['username']
    TodoModel.find({UserName:UserName}).then((result)=>{
            res.status(201).json({status:'success',data:result})
    }).catch((err)=>{
        res.status(404).json({status:err})
    })
}

exports.updateTodo=(req,res)=>{
    let reqBody  = req.body 

    let  TodoSubject = reqBody['TodoSubject']
    let  TodoDescription = reqBody['TodoDescription']
    let  _id = req.body['_id']
    let  TodoUpdateDate = Date.now()
    let postBody ={
        TodoSubject:TodoSubject,
        TodoDescription:TodoDescription,
        TodoUpdateDate:TodoUpdateDate,
    }
    TodoModel.updateOne({_id:_id}, {$set:postBody},{$upset:true},).then((result)=>{
            res.status(201).json({status:'success',data:result})
    }).catch((err)=>{
        res.status(404).json({status:err})
    })
}

exports.deleteTodo =(req,res)=>{
  
    let  _id = req.body['_id']

    TodoModel.deleteOne({_id:_id},{$upset:true},).then((result)=>{
            res.status(201).json({status:'success',data:result})
    }).catch((err)=>{
        res.status(404).json({status:err})
    })

}


exports. statusUpdateTodo=(req,res)=>{
    let reqBody  = req.body 
    let  TodoStatus = reqBody['TodoStatus']
    let  _id = req.body['_id']
    let  TodoUpdateDate = Date.now()
    
    let postBody ={
        TodoStatus:TodoStatus,
        TodoUpdateDate:TodoUpdateDate,
    }
    TodoModel.updateOne({_id:_id}, {$set:postBody},{$upset:true},).then((result)=>{
            res.status(201).json({status:'success',data:result})
    }).catch((err)=>{
        res.status(404).json({status:err})
    })
}