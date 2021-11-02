var  config = require('../dbconfig');
const  sql = require('mssql');


const getDbContacts = (req,res) =>{

    const sqlConn = new sql.ConnectionPool(config);
    sqlConn.connect().then(function() {
        const request = new sql.Request(sqlConn);
        const message = req.body.message
     
       console.log(message)
       request.query("select recipients from logtable where message='"+message+"'")
       .then(function (recordsets) {
        sqlConn.close();
        return res.send(recordsets)
       }).catch(function (err) {
        console.log("Error : " + err);
        sqlConn.close();
        return res.send('Error');
    });




        
    })




}



exports.getDbContacts = getDbContacts