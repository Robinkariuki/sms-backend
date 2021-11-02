var  config = require('../dbconfig');
const  sql = require('mssql');


const postDescription = (req, res) => {

    
  
   
   var sqlConn = new sql.ConnectionPool(config);

   sqlConn.connect().then(function () {
    const request = new sql.Request(sqlConn);
    const contacts = req.body.recipients.split(",");
     
    const results = []
    contacts.map(i=>{
        results.push(request.query(("Insert into logtable (description,message,recipients,sentDate) values ('"+req.body.description+"','"+req.body.message+"','"+i+"','"+new Date().toISOString('en-US', { timeZone: 'Africa/Nairobi' })+"')")))
    })

Promise.all(results)
.then(function() {
    sqlConn.close();
    return res.send('Inserted successfully');
    
}).catch(function (err) {
    console.log("Error : " + err);
    sqlConn.close();
    return res.send('Error');
});


     
   })

   

    
};



exports.postDescription = postDescription