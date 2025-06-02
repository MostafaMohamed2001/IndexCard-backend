const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const { AUTH } = require("../Config/constant");
const ApiError = require("../utils/errors/apiError");
const sendResponse = require("../utils/res/sendResponse");
const { sendOtpEmail } = require("../utils/emails/sendMail");

const { OtpModel, UserModel } = require("../models");
const { generateToken } = require("../utils/functions");

exports.sendOtp = asyncHandler(async (req, res, next) => {
  const { email } = req.body;
  const findOtp = await OtpModel.findOne({ email });
  if (findOtp) {
    return next(new ApiError(AUTH.OTP.EMAIL_EXIST, 400));
  }
  const otpDoc = await OtpModel.create({
    code: AUTH.OTP.CODE,
    email,
  });
  if (!otpDoc) {
    return next(new ApiError(AUTH.OTP.EMAIL_ERROR, 500));
  }
  await sendOtpEmail(email, otpDoc.code);
  sendResponse({
    res,
    statusCode: 200,
    message: AUTH.OTP.EMAIL_MESSAGE,
    data: {
      email: otpDoc.email,
    },
  });
});

exports.verifyOtp = asyncHandler(async (req, res, next) => {
  const { email, otp } = req.body;

  const findOtp = await OtpModel.findOne({ email, code: otp });
  if (!findOtp) {
    return next(new ApiError(AUTH.OTP.OTP_ERROR, 400));
  }

  await findOtp.deleteOne();
  let user = await UserModel.findOne({ email });
  if (!user) {
    user = await UserModel.create({ email });
    if (!user) {
      return next(new ApiError(AUTH.OTP.USER_CREARTE_ERROR, 500));
    }
  }

  const token = await generateToken({ id: user._id, email: user.email });

  sendResponse({
    res,
    statusCode: 200,
    message: AUTH.OTP.VERIFY_SUCCESS,
    data: {
      email: user.email,
      token,
    },
  });
});
