const express = require("express");

const router = express.Router();
const mysqlConnection = require("../db/mysql_connection");


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
            "SELECT * FROM person INNER JOIN records ON records.nic = person.DeviceId INNER JOIN phi ON person.MCI=" +
            mysqlConnection.escape(req.user["MCI"])+" WHERE person.Pulse != 'Not Wearing' ";
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


    module.exports = router;