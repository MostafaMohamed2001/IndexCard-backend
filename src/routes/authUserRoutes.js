const express = require("express");
const router = express.Router();
const {
  sendOtp,
  verifyOtp,
} = require("../Controllers/otpVerification.Controller");
const {
  createUserValidation,
  verifyOtpValidation,
} = require("../Validators/User/userValidator");
router.post("/otp", createUserValidation, sendOtp);
router.post("/verify", verifyOtpValidation, verifyOtp);
module.exports = router;
