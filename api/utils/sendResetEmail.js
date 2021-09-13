const { options } = require("../routes/private");
const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");

const sendResetEmail = (options) => {
  const auth = {
    auth: {
      api_key: process.env.API_KEY,
      domain: process.env.DOMAIN,
    },
  };

  let transporter = nodemailer.createTransport(mg(auth));

  //   email message to be sent
  const message = {
    from: process.env.EMAIL_FROM,
    to: options.to,
    subject: options.subject,
    html: options.text,
  };
  //   sends email and handle error
  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log("Error:", err);
    } else {
      console.log("Message sent!!", info);
    }
  });
};

module.exports = sendResetEmail;
