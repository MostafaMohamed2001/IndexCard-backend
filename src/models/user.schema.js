const mongoose = require("mongoose");
const fcmTokenSchema = require("./fcmToken.schema");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      unique: true,
      required: true,
    },
    address: {
      type: String,
      trim: true,
    },
    boardId: {
      type: String,
      required: true,
      minlength: 12,
    },
    city: {
      type: String,
      trim: true,
    },
    boardActive: {
      type: Boolean,
      default: true,
    },
    nationalId: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
      min: 0,
    },
    fcmTokens: [fcmTokenSchema],
    firstTime: {
      type: Number,
      default: 0,
    },

    emergencyContacts: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },
        phone: {
          type: String,
          required: true,
        },
        // priority: {
        //   type: Number,
        //   required: true,
        // },
        // address: {
        //   type: String,
        //   required: true,
        // },
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = userSchema;
