"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const nodeMailer =async () => {

  let transporter = nodemailer.createTransport({
    host: "smtp.email.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'mariem.saffar@polytechnien.tn', // generated ethereal user
      pass: ''// generated ethereal password
    },
  });
const message = {
    from: '"mariem saffar 👻" <mariem.saffar@polytechnien.tn>', // sender address
    to: "mariem.saffar@polytechnien.tn", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "vous etes acceptés , vous pouvez nous rejoindre demain pour compléter les procédeures necessaires", // plain text body
    html: "<b>cordialement</b>", // html body

};
  // send mail with defined transport object
  await transporter.sendMail(message , (err , info )=>{
    if(err){
        console.log(err)
    
    }else{
        console.log('mail sent:'+ info.response);
    }
  });


}

module.exports = {
    nodeMailer,
}
