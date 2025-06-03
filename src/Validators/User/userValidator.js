const { checkValidation } = require("./../../middlewares");
const { check } = require("express-validator");
const { AUTH } = require("../../Config/constant");

const loginValidation = [
  check("email").isEmail().withMessage(AUTH.VALIDATION.EMAIL_REQUIRED),
  checkValidation,
];

const verifyOtpValidation = [
  check("email").isEmail().withMessage(AUTH.VALIDATION.EMAIL_REQUIRED),
  check("otp")
    .isLength({ min: 4, max: 4 })
    .withMessage(AUTH.VALIDATION.OTP_LENGTH)
    .isNumeric()
    .withMessage(AUTH.VALIDATION.OTP_NUMERIC),
  checkValidation,
];

module.exports = {
  loginValidation,
  verifyOtpValidation,
};
