const express = require('express')
const router = express.Router();

const dbDatacontroller =require('../controllers/dbDatacontroller');


router.post('/getContacts',dbDatacontroller.getDbContacts)





module.exports =router;