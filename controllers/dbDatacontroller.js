var  config = require('../dbconfig');
const  sql = require('mssql');




const getDbBranches = (req,res) =>{
   
    const sqlConn = new sql.ConnectionPool(config);
    sqlConn.connect().then(function () {
        const request = new sql.Request(sqlConn);
        request.query("select * from Branches")
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



const getDbContacts = (req,res) =>{

    const sqlConn = new sql.ConnectionPool(config);
    sqlConn.connect().then(function() {
        const request = new sql.Request(sqlConn);
        const store_ID = Object.keys(req.body).pop(); 
        
        // console.log(store_ID)
    
       request.query("select * from contacts where [store ID]='"+store_ID+"'")
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
exports.getDbBranches = getDbBranches