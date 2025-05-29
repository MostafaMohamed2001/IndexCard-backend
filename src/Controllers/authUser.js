const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/errors/apiError");
const { sendOtpEmail } = require("../utils/emails/sendMail");
const {UserModel}  = require("../models");

exports.loginUser = asyncHandler(async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return next(new ApiError("Email is required", 400));
  }

  // Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // OTP valid for 10 min

  let user = await UserModel.findOne({ email });

  if (!user) {
    user = await UserModel.create({ email, otp, otpExpires });
  } else {
    user.otp = otp;
    user.otpExpires = otpExpires;
    await user.save();
  }

  await sendOtpEmail(email, otp);

  res.status(200).json({
    status: "success",
    message: "تم إرسال رمز التحقق إلى البريد الإلكتروني",
    user: {
      id: user._id,
      email: user.email,
    },
  });
});
