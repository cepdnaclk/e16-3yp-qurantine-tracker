


const router = require("express").Router();
const mysqlConnection = require("../db/mysql_connection");

router.post("/login", (req, res) => {
  try {
    var sql =
    
      "INSERT INTO records VALUES(" +
      mysqlConnection.escape(req.body.nic) +
      "," +
      mysqlConnection.escape(req.body.Date) +
      "," +
      mysqlConnection.escape(req.body.Temp1) +
      "," +
      mysqlConnection.escape(req.body.Temp2) +
      ")";
      
      "SELECT * FROM phi WHERE Password=" +
      mysqlConnection.escape(req.body.pw) +
      "AND MCI=" +
      mysqlConnection.escape(req.body.loginname);
    mysqlConnection.query(
      {
        sql: sql,
        timeout: 40000,
      },
      function (error, results, fields) {
        if (error) {
            console.log(error);
          
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.redirect("http://localhost:3000/main/loginpage.html");
  }
});

module.exports = router;