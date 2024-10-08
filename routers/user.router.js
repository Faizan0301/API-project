const { Router } = require("express");
const { addUser, deleteUser, login, getData } = require("../controllers/user.controller");

const user_router=Router();

user_router.get('/getData',getData)
user_router.post('/add',addUser);
user_router.post('/update',addUser);
user_router.delete('/delete/:id',deleteUser);
user_router.post('/login',login);

module.exports=user_router;