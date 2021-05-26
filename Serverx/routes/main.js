const express=require('express')
var path = require("path");

const router=express.Router();

router.get('/firstpage',(req,res)=>{
    res.render("firstpage",{layout: false})
})

router.get('/loginpage.html',(req,res)=>{
    res.render("loginpage",{layout: false,data:false})
})

router.get('/userRegister.html',(req,res)=>{
    res.render("userRegister",{layout: false,data:false})
})

router.get('/passwordrecovery.html',(req,res)=>{
    res.render("passwordrecovery",{layout: false,data:false})
})
module.exports=router;