const mongoose = require("mongoose");
const { categoryStatus, cdn } = require("../../config/constants");

const providersCategory = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "providerCategory",
    },

    icon: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = providersCategory;
