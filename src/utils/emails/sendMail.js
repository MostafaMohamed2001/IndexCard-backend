// src/utils/emails/sendMail.js
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  auth: {
    user: "mostafabusnins8828@gmail.com",
    pass: process.env.EMAIL_PASS,
  },
});

const sendOtpEmail = async (to, otp) => {
  try {
    const mailOptions = {
      from: "mostafabusnins8828@gmail.com",
      to,
      subject: "رمز التحقق الخاص بك",
      text: `رمز التحقق الخاص بك هو: ${otp}\nينتهي خلال 10 دقائق.`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("تم إرسال رسالة البريد الإلكتروني: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("خطأ في إرسال البريد الإلكتروني:", error);
    throw error;
  }
};

module.exports = {
  sendOtpEmail,
};
