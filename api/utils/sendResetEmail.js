const mailgun = require("mailgun-js");
const { options } = require("../routes/private");
// const nodemailer = require("nodemailer");

const sendResetEmail = (options) => {
  // transporter object to setup mail service and auth
  //   let transporter = nodemailer.createTransport({
  //     service: process.env.EMAIL_SERVICE,
  //     auth: {
  //       user: process.env.EMAIL_USER,
  //       pass: process.env.EMAIL_PASSWORD,
  //     },
  //   });
  // email message to be sent
  //   const message = {
  //     from: process.env.EMAIL_FROM,
  //     to: options.to,
  //     subject: options.subject,
  //     html: options.text,
  //   };
  //   // sends email and handle error
  //   transporter.sendMail(message, (err, info) => {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log("Server is ready to take our messages");
  //     }
  //   });
  const DOMAIN = process.env.DOMAIN;
  const API_KEY = process.env.API_KEY;
  const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });
  const data = {
    from: process.env.EMAIL_FROM,
    to: options.to,
    subject: options.subject,
    text: options.text,
  };
  mg.messages().send(data, function (error, body) {
    if (error) {
      console.log(error);
    } else {
      console.log(body);
    }
  });
};

module.exports = sendResetEmail;
