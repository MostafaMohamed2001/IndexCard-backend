const mongoose = require('mongoose');
const { categoryStatus, cdn } = require('../../config/constants');

const cities = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
},{
    timestamps:true
});
module.exports = cities;
