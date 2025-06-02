const mongoose = require('mongoose');
const { categoryStatus, cdn } = require('../../config/constants');

const services = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  slug: {
    type: String,
    required: true
  }
});

services.virtual('iconUrl').get(function() {
  return cdn + '/o/100/' + this.icon
});

services.index({ createdAt: 1 })
module.exports = services;