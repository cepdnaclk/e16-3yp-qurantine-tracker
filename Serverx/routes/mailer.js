const nodemailer = require('nodemailer');


var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "48825399c1f1f7",
    pass: "d00231036ed4ad"
  }
});

const message = {
  from: 'elonmusk@tesla.com', // Sender address
  to: 'tharushi1995619@gmail.com',         // List of recipients
  subject: 'Design Your Model S | Tesla', // Subject line
  text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
};
transport.sendMail(message, function(err, info) {
  if (err) {
    console.log(err)
  } else {
    console.log(info);
  }
});