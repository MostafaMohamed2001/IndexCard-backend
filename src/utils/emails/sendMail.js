const nodemailer = require("nodemailer");

const EMAIL_USER = process.env.EMAIL_USER || "mostafabusnins8828@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false, // false for TLS port 587
  auth: {
    user: EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendOtpEmail = async (to, otp) => {
  try {
    const mailOptions = {
      from: EMAIL_USER,
      to,
      subject: "رمز التحقق الخاص بك",
      text: `رمز التحقق الخاص بك هو: ${otp}\nينتهي خلال 5 دقائق.`,
      html: `
        <p>رمز التحقق الخاص بك هو: <b>${otp}</b></p>
        <p>ينتهي خلال <b>5 دقائق</b>.</p>
      `,
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