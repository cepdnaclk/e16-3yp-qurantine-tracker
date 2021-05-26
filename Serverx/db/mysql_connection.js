const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "xyz",
  database: "qtracker",
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("My sql database connected..");
  } else {
    console.log("My sql database connection error.."+err);
  }
});

module.exports=mysqlConnection
