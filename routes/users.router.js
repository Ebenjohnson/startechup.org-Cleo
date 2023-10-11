const express = require ('express')
const router = express.Router()

const UserController = require('../controller/user.controller')

//Routes are uls for your API

router.get('/users', UserController.GetAllUsersList)
router.post('/user', UserController.Register)
router.put('/user/:user_id',UserController.UpdateUser)
router.delete('/user/:user_id',UserController.DeleteUser)
router.get('user/:user_id',UserController.GetUserById)
router.get('/user/:user_type',UserController.GetUsersByType)



module.exports = router