const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  auth: {
    user: "mostafabusnins8828@gmail.com",
    pass: process.env.EMAIL_PASS,
  },
});

const sendMail = async (to, otp) => {
  try {
    const htmlPath = path.join(__dirname, "../../views/satarsOtp.html");
    let htmlContent = fs.readFileSync(htmlPath, "utf8");

    // استبدال القيم الديناميكية في HTML
    htmlContent = htmlContent.replace("{{otp}}", otp);

    const mailOptions = {
      from: "satars@gmail.com",
      to,
      subject: "رمز التحقق الخاص بك",
      html: htmlContent,
      attachments: [
        {
          filename: "logo.png",
          path: `${path.join(__dirname, "./logo.png")}`,
          cid: "logo",
        },
        {
          filename: "x.png",
          path: `${path.join(__dirname, "./x.png")}`,
          cid: "iconX",
        },
        {
          filename: "face.png",
          path: `${path.join(__dirname, "./face.png")}`,
          cid: "iconFB",
        },
        {
          filename: "tiktok.png",
          path: `${path.join(__dirname, "./tiktok.png")}`,
          cid: "iconTT",
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("رسالة البريد الإلكتروني أرسلت: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

const sendMailChangedEmail = async (to, otp , oldEmail) => {
  try {
    const htmlPath = path.join(__dirname, "../../views/changedEmail.html");
    let htmlContent = fs.readFileSync(htmlPath, "utf8");

    htmlContent = htmlContent.replace("{{otp}}", otp);
    htmlContent = htmlContent.replace("{{oldEmail}}", oldEmail);
    htmlContent = htmlContent.replace("{{newEmail}}", to);

    const mailOptions = {
      from: "satars@gmail.com",
      to,
      subject: "رمز التحقق الخاص بك",
      html: htmlContent,
      attachments: [
        {
          filename: "logo.png",
          path: `${path.join(__dirname, "./logo.png")}`,
          cid: "logo",
        },
        {
          filename: "x.png",
          path: `${path.join(__dirname, "./x.png")}`,
          cid: "iconX",
        },
        {
          filename: "face.png",
          path: `${path.join(__dirname, "./face.png")}`,
          cid: "iconFB",
        },
        {
          filename: "tiktok.png",
          path: `${path.join(__dirname, "./tiktok.png")}`,
          cid: "iconTT",
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("رسالة البريد الإلكتروني أرسلت: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

module.exports = {
    sendMail,
    sendMailChangedEmail
};
