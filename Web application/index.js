const http = require("http");
const express = require("express");
const exphbs  = require('express-handlebars');
const { env } = require("process");
const bodyparser=require('body-parser')

const app=express()
const PORT=env.PORT!=null?env.PORT:3000
const server=http.createServer(app)

const mainRoute=require('./routes/main')
const userRoute=require('./routes/user')


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true})); 

app.engine('hbs', exphbs({
    extname:'hbs',
}));
app.set('view engine', 'hbs');

app.use('/public',express.static(__dirname + '/public'))
app.use('/main',mainRoute)
app.use('/user',userRoute)


app.get('/',(req,res) =>{
    res.send({"Started":true})
})





server.listen(PORT,function () {
    console.log("Serevr start at port.."+PORT)
})






