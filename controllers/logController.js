var  config = require('../dbconfig');
const  sql = require('mssql');


const postDescription = (req, res) => {
    // res.set('Access-Control-Allow-Origin', '*');
    // const { description,recipients,message  } = req.body;    
    // let connection = new sql.ConnectionPool(config, function(err) {
    //     let request = new sql.Request(connection);
    //     request.query("insert into persons (FirstName, LastName) values ('" + FirstName + "', '" + LastName + "')");
    // });
    // res.send({ message: 'Success',data:req.body})
    console.log({ message: "API Working inine",data:req.body})

   
   var sqlConn = new sql.ConnectionPool(config);
   sqlConn.connect().then(function () {
      var transaction = new sql.Transaction(sqlConn);
      transaction.begin().then(function () {
         var request = new sql.Request(transaction);
         request.query("Insert into logtable (description,message,recipients) values ('"+req.body.description+"','"+req.body.message+"','"+req.body.recipients+"',)").then(function () {
            transaction.commit().then(function (recordSet) {
                console.log(recordSet);
                sqlConn.close();
                return res.send('Inserted successfully');
            }).catch(function (err) {
                console.log("Error in Transaction Commit " + err);
                sqlConn.close();
                return res.send('Error');
            });
        });
    });
   

   });
    
};



exports.postDescription = postDescription