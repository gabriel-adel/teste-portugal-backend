
var mysql      = require('mysql2');
var con = mysql.createConnection({
  host     : "",
  user     : "admin",
  password : "",
  database: "peoples"
});

con.connect();
module.exports = con;

