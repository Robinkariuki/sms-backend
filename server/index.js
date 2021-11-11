const express = require("express");

const logRoutes = require('../routes/logRoutes')
const dbDataRoutes = require('../routes/dbDataRoutes')
const smsRoutes = require('../routes/smsRoutes')
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  

  
  next();

});

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
  
});

app.use("/api",smsRoutes)
app.use("/api",logRoutes)
app.use("/api",dbDataRoutes)


var sql = require("mssql");
var config = require("../dbconfig")

 // connect to your database
 sql.connect(config, function (err) {
    
    if (err) console.log(err);

 });

const PORT = process.env.PORT || 3001;



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});