// config for your database
    var config = {
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        server: process.env.DB_HOST, 
        database:process.env.DB_DATA,
        port: parseInt(process.env.DB_PORT, 10),
        options: {
          // encrypt: true, // for azure
          trustServerCertificate: true ,// change to true for local dev / self-signed certs
          trustedconnection:true,
       
        }
    };


    module.exports = config