const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    code: {
      type: String,
      required: true,
    },
    verified:{
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);
otpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 300 });

module.exports = otpSchema;
