const mongoose = require("mongoose");
const { categoryStatus, cdn } = require("../../config/constants");
const locationSchema = require("./location.schema");

const providersBranches = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    phoneNumbers: {
      type: [String],
      required: false,
    },
    address: {
      type: String,
      required: false,
    },

    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cities",
      required: true,
    },
    region: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Regions",
    },
    provider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Providers",
      required: true,
    },

    location: locationSchema,
    deleted: { type: Boolean, default: false },
  },
  {
    timestamps: false,
  }
);

providersBranches.index({ createdAt: 1 });
providersBranches.index({ location: "2dsphere" });

module.exports = providersBranches;
