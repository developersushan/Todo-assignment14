const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet  = require('helmet')
const hpp = require('hpp')
const rateLimiter = require('express-rate-limit')
const  router  = require('./src/routes/api')

require('dotenv').config()
const app = new express()

//open  cors 
app.use(cors())

//security implement

app.use(helmet())
app.use(hpp())
app.use(express.json({limit:'20MB'}))
app.use(express.urlencoded({extended:true}))
const limiter = rateLimiter({windowMs:15*60*1000,max:3000})
app.use(limiter)

//mongoose database implement
const URL = `${process.env.DATABASE_NAME}`
const OPTION = {name:'' , pass:'', autoIndex:true}
mongoose.connect(URL,OPTION).then((res)=>{
    console.log('Database connected ..........')
}).catch((err)=>{
    console.log(err)
})


//api route implement
app.use('/api', router)

//404 not found route
app.use('*',(req,res)=>{
    res.status(404).json({status:'fail' , message:'404 not found'})
})

module.exports = app