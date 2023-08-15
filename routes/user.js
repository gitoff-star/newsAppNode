const userController = require('../controllers/user');
var express = require('express');
const auth = require('../services/auth');
var router = express.Router();


router.post('/login',userController.login);
router.post('/signup',userController.signup);
router.get('/users',auth,userController.getAll);
router.get('/deluser',auth,userController.removeUser);
router.post('/deluser/:id',auth,userController.removeUser)



module.exports= router;

