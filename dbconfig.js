    // config for your database
    var config = {
        user: 'robin',
        password: 'hitman11',
        server: 'localhost', 
        database: 'Naivas2' ,
        port: 1433,
        options: {
          // encrypt: true, // for azure
          trustServerCertificate: true ,// change to true for local dev / self-signed certs
          trustedconnection:true,
       
        }
    };


    module.exports = config