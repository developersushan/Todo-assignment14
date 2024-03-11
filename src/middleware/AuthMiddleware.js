const jwt  = require('jsonwebtoken')

module.exports=(req,res,next)=>{
    let token = req.headers['token']

    jwt.verify(token,'abc-xyz-10' , function(err,decoded){
        if(err){
            res.status(401).json({status:'fail',message:'verification fail'})
        }else{
            let reqBody = decoded['data']
            let username = reqBody.UserName
            req.headers.username =username
            next()
        }
    })
}