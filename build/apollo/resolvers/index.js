"use strict";

var productResolver = require('./product.resolver');

var orderResolver = require('./order.resolver');

module.exports = [productResolver, orderResolver //touts les resolvers
];