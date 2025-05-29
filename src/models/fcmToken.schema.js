const mongoose = require('mongoose');

const fcmTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  deviceId: {
    type: String,
    required: true,
  },
  deviceInfo: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = fcmTokenSchema;