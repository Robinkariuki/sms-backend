const express = require('express')
const router = express.Router();

const dbDatacontroller =require('../controllers/dbDatacontroller');


router.post('/getContacts',dbDatacontroller.getDbContacts)
router.get('/getBranches',dbDatacontroller.getDbBranches)




module.exports =router;