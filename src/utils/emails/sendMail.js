const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false, // يجب أن تكون true إذا كنت تستخدم المنفذ 465
  auth: {
    user: "mostafabusnins8828@gmail.com",
    pass: process.env.EMAIL_PASS,
  },
});

const sendMail = async (to, subject, password) => {
  try {
    // قراءة ملف HTML الخارجي
    const htmlPath = path.join(__dirname, "../../views/email.html");
    let htmlContent = fs.readFileSync(htmlPath, "utf8");

    // استبدال القيم المتغيرة في HTML
    htmlContent = htmlContent.replace("{{password}}", password);

    // إعداد خيارات البريد
    const mailOptions = {
      from: "satars@gmail.com",
      to,
      subject,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("رسالة البريد الإلكتروني أرسلت: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("خطأ في إرسال البريد الإلكتروني:", error);
    throw error;
  }
};


const sendOtpEmail = async (to, otp) => {
  try {
    // قراءة ملف HTML
    const htmlPath = path.join(__dirname, "../../views/otp-email.html");
    let htmlContent = fs.readFileSync(htmlPath, "utf8");

    // استبدال القيم الديناميكية في HTML
    htmlContent = htmlContent.replace("{{otp}}", otp);

    // إعداد خيارات البريد
    const mailOptions = {
      from: "satars@gmail.com",
      to,
      subject: "رمز التحقق الخاص بك",
      html: htmlContent,
    };

    // إرسال البريد الإلكتروني
    const info = await transporter.sendMail(mailOptions);
    console.log("رسالة البريد الإلكتروني أرسلت: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("خطأ في إرسال البريد الإلكتروني:", error);
    throw error;
  }
};
// استدعاء الدالة مع بيانات تجريبية
module.exports = {
  sendMail,
  sendOtpEmail
};
  