const nodemailer = require("nodemailer");
require("dotenv").config();

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

// Verify the transporter configuration
transporter.verify((err, success) => {
  if (err) {
    console.log("Mailing failed to verify.");
    console.log(err);
  } else {
    console.log("Ready for message to be sent");
    console.log(success);
  }
});

export default async function sendMail({ from, to, subject, text, html }) {
  const mailOptions = {
    from: from ?? process.env.FROM_EMAIL,
    to,
    subject,
    text,
    html,
  };

  console.debug("sendEmail: ", mailOptions);

  try {
    const info = await transporter.sendMail(mailOptions);
    console.debug(`OTP sent to ${email}`);
    console.debug(`messageID: ${info.messageId}`);
  } catch (error) {
    console.error("Error sending OTP email:", error);
  }
}
