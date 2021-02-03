const auth = async(req, res, next)=>{
    try {
      let token = req.cookies['x-access-token'];
      if (token) {
        console.log(token);
        const decode = jwt.verify(token, 'Express')
        const user = await Users.findOne({_id:decode._id,'tokens.token':token})
        if (!user) {
           return res.redirect('/login');
        }
        req.token = token
        req.user = user
        next()
       }else{
         // cookie not found redirect to login 
         return res.redirect('/login');
      }
   }catch (e) const mysqlConnection = require("../db/mysql_connection");
var jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    let token = req.cookies["x-access-token"];
    if (token) {
      
      const decode = jwt.verify(token, "secreat key");
      var sql =
        "SELECT * FROM phi WHERE  MCI=" + mysqlConnection.escape(decode.data);
      mysqlConnection.query(
        {
          sql: sql,
          timeout: 40000,
        },
        function (error, results, fields) {
          if (!error) {
            var json = JSON.parse(JSON.stringify(results));
            var data = json[0];
            req.user = data;
            req.token = token;
            next();
          } else {
            console.log(error);
            res.redirect("http://localhost:3000/main/loginpage.html");
          }
        }
      );
    } else {
      // cookie not found redirect to login
      return res.redirect("http://localhost:3000/main/loginpage.html");
    }
  } catch (e) {
    res.send("Please Login!");
  }
};


module.exports=auth
    res.send('Please Login! ')
  }
}
