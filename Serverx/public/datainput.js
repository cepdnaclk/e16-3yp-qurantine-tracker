var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "19june97"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
