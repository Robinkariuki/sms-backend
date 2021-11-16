const express = require('express');
const router = express.Router();
const smsController = require('../controllers/smsController')


router.post('/smsbulk',smsController.SendBulkSms)
router.post('/callback',smsController.callBackSms)




module.exports =router;


