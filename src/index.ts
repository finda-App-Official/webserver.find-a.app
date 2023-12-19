import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "mail.agenturserver.de",
  port: 25,
  secure: true,
  auth: {
    user: "info@find-a.app",
    pass: process.env["SMTPPASS"],
  },
});

export default transporter;
