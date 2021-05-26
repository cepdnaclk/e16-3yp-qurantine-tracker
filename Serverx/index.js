const http = require("http");
const express = require("express");
const exphbs  = require('express-handlebars');
const { env } = require("process");
//const bodyparser=require('body-parser')
const cookieParser = require('cookie-parser');



const app=express()
const PORT=env.PORT!=null?env.PORT:3000
const server=http.createServer(app)

const mainRoute=require('./routes/main')
const userRoute=require('./routes/user')
const profileRoute=require('./routes/profile')
const noticeRoute=require('./routes/notice')
//const mailRoute=require('./routes/mailer')
const hardwareRout = require('./routes/hard')
const auth=require('./middlewares/auth')


//app.use(bodyparser.urlencoded({ extended: true}))
//app.use(bodyparser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cookieParser()) 

app.engine('hbs', exphbs({
    extname:'hbs',
}));
app.set('view engine', 'hbs');

app.use('/public',express.static(__dirname + '/public'))
app.use('/main',mainRoute)
app.use('/user',userRoute)
app.use('/user',noticeRoute)
//app.use('/user',mailRoute)
app.use('/hardware',hardwareRout)
app.use('/profile',auth,profileRoute)


app.get('/',(req,res) =>{
    res.send({"Started":true})
})


server.listen(PORT,function () {
    console.log("Serevr start at port.."+PORT)
})






