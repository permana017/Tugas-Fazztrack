

const express = require("express");
const userRouter = express();


const userController = require('../controller/users.controller')

userRouter.get('/', userController.get)
userRouter.get('/:id', userController.getById)
userRouter.post('/', userController.add)
userRouter.patch('/:id', userController.update)
userRouter.delete('/:id', userController.remove)




module.exports = userRouter