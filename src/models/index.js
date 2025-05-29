const  mongoose  = require("mongoose");

const userSchema = require("./user.schema");
const otpSchema = require("./otp.schema");
module.exports = {
  UserModel: mongoose.model("User", userSchema),
  OtpModel: mongoose.model("Otp",otpSchema ),

};
