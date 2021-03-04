"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var productSchema = new Schema({
  title: String,
  price: Number,
  description: String
}, {
  timestamps: true
});
module.exports = mongoose.model('Product', productSchema);