const { sendEmail } = require("../../../../support/sendEmail");

const emailController = {
  emailSend(req, res) {
    try {
      // Get the email data from the request body
      const { to, subject, text } = req.body;

      // Send the email
      sendEmail(to, subject, text);

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error sending email:", error });
    }
  },
};

module.exports = emailController;
