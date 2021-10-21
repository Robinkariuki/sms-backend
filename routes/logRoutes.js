var express = require('express');
var router = express.Router();
const logController = require('../controllers/logController')


router.post('/log',logController.postDescription)






module.exports =router;