const mongoose = require("mongoose");
const { categoryStatus, cdn } = require("../../config/constants");

const regions = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cities",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = regions;
