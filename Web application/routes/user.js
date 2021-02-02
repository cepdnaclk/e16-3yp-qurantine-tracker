const router = require("express").Router();

const mysqlConnection = require("../db/mysql_connection");

router.post("/login", (req, res) => {
  try {
    var sql =
      "SELECT * FROM phi WHERE password=" +
      mysqlConnection.escape(req.body.pw) +
      "AND mci=" +
      mysqlConnection.escape(req.body.loginname);
    mysqlConnection.query(
      {
        sql: sql,
        timeout: 40000,
      },
      function (error, results, fields) {
        if (!error) {
          var json = JSON.parse(JSON.stringify(results));
          var data = json[0];
          res.send(data);
        } else {
          console.log(error);
          res.render("loginpage", { layout: false, data: true });
        }
      }
    );
  } catch (error) {
    res.redirect("http://localhost:3000/main/loginpage.html");
  }
});

router.post("/signup", (req, res) => {
  try {
    var sql =
      "INSERT INTO phi VALUES(" +
      mysqlConnection.escape(req.body.id) +
      "," +
      mysqlConnection.escape(req.body.firstname) +
      "," +
      mysqlConnection.escape(req.body.lastname) +
      "," +
      mysqlConnection.escape(req.body.WorkingArea) +
      "," +
      mysqlConnection.escape(req.body.tp) +
      "," +
      mysqlConnection.escape(req.body.email) +
      "," +
      mysqlConnection.escape(req.body.passw) +
      ")";
    mysqlConnection.query(
      {
        sql: sql,
        timeout: 40000, // 40s
      },
      function (error, results, fields) {
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
        if (!error) {
          res.redirect("http://localhost:3000/main/loginpage.html");
        } else {
          res.render("userRegister", { layout: false, data: true });
        }
      }
    );
  } catch (error) {
    res.render("userRegister", { layout: false, data: true });
  }
});

module.exports = router;
