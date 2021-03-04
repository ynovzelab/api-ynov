"use strict";

var Product = require('../../models/product.model');

module.exports = {
  Query: {
    products: function products() {
      return Product.find();
    },
    product: function product(parent, args) {
      console.log(args.id);
      return Product.findById(args.id);
    }
  },
  Mutation: {
    createProduct: function createProduct(parent, args) {
      var newProduct = new Product({
        title: args.title,
        price: args.price,
        description: args.description
      });
      return newProduct.save();
    }
  }
};