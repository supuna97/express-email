const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: process.env.MAIL_DRIVER,
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: true, // true for 465, false for other ports
  secureConnection: false,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
  tls: {
    rejectUnAuthorized: true,
  },
});

module.exports = transporter;
