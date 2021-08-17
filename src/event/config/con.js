
var mysql      = require('mysql2');
var con = mysql.createConnection({
  host     : "", 
  user     : "admin", 
  password : "", 
  database: "events" 
});

con.connect();
module.exports = con;

