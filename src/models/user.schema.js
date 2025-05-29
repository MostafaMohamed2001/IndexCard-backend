const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    otp: String,
    otpExpires: Date,
  },
  {
    timestamps: true,
  }
);
module.exports = userSchema;
