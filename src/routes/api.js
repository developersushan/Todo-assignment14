const express = require('express');
const {   createProfile, userLogin, selectProfile, profileUpdate } = require('../controller/userController');
const AuthMiddleware = require('../middleware/AuthMiddleware');
const { createTodo, selectTodo, updateTodo, statusUpdateTodo, deleteTodo } = require('../controller/TodoController');

const router = express.Router()


router.post('/createProfile' , createProfile)

router.post('/userLogin', userLogin)
router.get('/selectProfile', AuthMiddleware , selectProfile)
router.post('/profileUpdate' , AuthMiddleware , profileUpdate)

router.post('/createTodo' , AuthMiddleware , createTodo)
router.get('/selectTodo' , AuthMiddleware , selectTodo)
router.post('/updateTodo' ,AuthMiddleware , updateTodo )
router.post('/statusUpdateTodo' ,AuthMiddleware , statusUpdateTodo )
router.get('/deleteTodo' ,AuthMiddleware , deleteTodo )


module.exports =router;