const userController = require('../controllers/user');
var express = require('express');
const auth = require('../services/auth');
const tryCatch = require('../configurations/tryCatch');
var router = express.Router();


router.get('/users', userController.getAll);
router.get('/deluser',userController.removeUser);
router.post('/deluser/:id',userController.removeUser)



module.exports= router;

