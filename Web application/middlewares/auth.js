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
   }catch (e) {
    res.send('Please Login! ')
  }
}