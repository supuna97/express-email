const transporter = require("../config/mail");

async function sendEmail(to, subject, text) {
  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM, // sender address
      to, // list of receivers
      subject, // Subject line
      text, // plain text body
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = {
  sendEmail,
};
