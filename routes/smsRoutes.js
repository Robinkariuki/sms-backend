const express = require('express');
const router = express.Router();
const smsController = require('../controllers/smsController')


router.post('/smsbulk',smsController.SendBulkSms)




module.exports =router;


