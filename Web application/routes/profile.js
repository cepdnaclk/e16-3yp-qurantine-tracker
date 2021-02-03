const express = require("express");

const router = express.Router();
const mysqlConnection = require("../db/mysql_connection");

router.get("/home", (req, res) => {
  console.log(req.user["FirstName"]);
  res.render("profile", {
    layout: false,
    fname: req.user["FirstName"],
    lname: req.user["LastName"],
    email: req.user["EMail"],
    area: req.user["WorkingArea"],
  });
});

router.get("/mylist", (req, res) => {
//   res.render("mylist", {
//     layout: false,
//     fname: req.user["firstname"],
//     lname: req.user["lastname"],
//     email: req.user["email"],
//     area: req.user["workingarea"],
//     data: [],
//   });
    try {
      var sql =
        "SELECT * FROM person INNER JOIN phi ON person.MCI=" +
        mysqlConnection.escape(req.user["MCI"]);
      mysqlConnection.query(
        {
          sql: sql,
          timeout: 40000,
        },
        function (error, results, fields) {
          if (!error) {
            var json = JSON.parse(JSON.stringify(results));
            console.log(json);
            res.render("mylist", {
              layout: false,
              fname: req.user["FirstName"],
              lname: req.user["LastName"],
              email: req.user["Email"],
              area: req.user["WorkingArea"],
              data: json,
            });
          } else {
            console.log(error);
            res.render("loginpage", { layout: false, data: false });
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
});

router.get("/personreg", (req, res) => {
  res.render("personReg", { layout: false, data: false });
});

router.post("/adduser", (req, res) => {
  try {
    var sql =
      "Insert into person (NIC,FirstName,LastName,Contact,StartDate,EndDate,AddressLine1,AddressLine2,AddressLine3,BelongArea,DeviceID,MCI) values(" +
      mysqlConnection.escape(req.body.id) +
      "," +
      mysqlConnection.escape(req.body.firstname) +
      "," +
      mysqlConnection.escape(req.body.lastname) +
      "," +
      mysqlConnection.escape(req.body.tp) +
      "," +
      mysqlConnection.escape(req.body.tripstart) +
      "," +
      mysqlConnection.escape(req.body.tripend) +
      "," +
      mysqlConnection.escape(req.body.ad1) +
      "," +
      mysqlConnection.escape(req.body.ad2) +
      "," +
      mysqlConnection.escape(req.body.ad3) +
      "," +
      mysqlConnection.escape(req.body.barea) +
      "," +
      mysqlConnection.escape(req.body.deviceid) +
      "," +
      mysqlConnection.escape(req.user["MCI"]) +
      ")";
    mysqlConnection.query(
      {
        sql: sql,
        timeout: 40000,
      },
      function (error, results, fields) {
        if (!error) {
         // res.redirect("mylist")
        res.render("personReg", { layout: false, data: true });
        } else {
          console.log(error);
          res.render("loginpage", { layout: false, data: false });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
