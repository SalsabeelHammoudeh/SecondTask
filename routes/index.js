var express = require('express');
const userController = require("../controllers/users");
const mainController = require("../controllers/main");


var router = express.Router();
/* GET home page. */
router.get('/', mainController.getIndexFile);
router.post('/userForm/save', userController.postAddUser);
router.post('/userForm/saveEdited/:id', userController.postEditUser);
router.get('/allUsers', userController.getAllUsers);
router.get('/getUser/:id', userController.getUserById);
router.delete('/deleteUser/:id', userController.deleteUserById);
module.exports = router;
