const mongoose = require('mongoose');
const { categoryStatus, cdn } = require('../../config/constants');
const locationSchema = require('./location.schema');
const { Slugify } = require('../../utilities/formatters');

const providers = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
  },
  images: [{
    type: String,
    required: true,
    default: null,
  }],
  phoneNumbers: {
    type: [String],
    required: false,
  },
  specialization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProvidersSpecialties",
    required: false,
    default: null,
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProvidersSubcategory",
    required: true,
  },
  rate: {
    type: Number,
    min: 0,
    max: 5
  },
  services:{
    type: [{
      service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Services",
        required: false,
      },
      contract: {
        discount: {
          type: Number,
          min: 0,
          max: 100
        }
      }
    }]
  },
  address: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },


  

  location: locationSchema,
  deleted:{type: Boolean, default: false}
});

providers.virtual('logoUrl').get(function() {
  return cdn + '/o/100/' + this.logo
});

providers.index({ createdAt: 1 });
  providers.index({ location: '2dsphere' });

providers.pre('save',function(next) {
  this.slug = Slugify.slug(this.title)
  next()
})
module.exports = providers;
