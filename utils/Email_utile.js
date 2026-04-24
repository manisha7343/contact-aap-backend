const nodemailer = require("nodemailer");
require('dotenv').config()

// Transporter setup
const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Yahan 'App Password' hona chahiye
  },
});

// Reusable function
const sendEmail = async (to, subject, html) => {
  try {
    const info = await transport.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
    });
  } catch (error) {
    console.error("Email error:", error);
    throw error; // Error ko upar bhej dega taaki controller use handle kar sake
  }
};

module.exports = sendEmail;