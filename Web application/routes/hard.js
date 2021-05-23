const router = require("express").Router();


const mysqlConnection = require("../db/mysql_connection");

router.post("/datapath", (req, res) => {
    try {
        var sql = "UPDATE records SET Temp =" + 
        mysqlConnection.escape(req.body.temp) ;
      
      mysqlConnection.query(
        {
          sql: sql,
          timeout: 40000,
        },
        function (error, results, fields) {
          if(error){
              console.log(error);
              res.status(400);
              res.send('None shall pass');
          }
          res.send("OK");
        }
      );
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;