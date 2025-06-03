const express = require("express");
const router = express.Router();
const {
  login,
  verifyOtp,
} = require("../Controllers/auth.Controller");
const {
  loginValidation,
  verifyOtpValidation,
} = require("../Validators/User/userValidator");
router.post("/login", loginValidation, login);
router.post("/verify", verifyOtpValidation, verifyOtp);
module.exports = router;
