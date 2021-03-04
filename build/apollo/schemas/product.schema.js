"use strict";

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require('apollo-server-express'),
    gql = _require.gql;

module.exports = gql(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  type Product {\n    id: ID!\n    title: String\n    price: Float!\n    description: String\n  }\n  extend type Query {\n    products: [Product]\n    product(id: ID!): Product\n  }\n  extend type Mutation {\n    createProduct(title: String, price: Float, description: String): Product,\n    updateProduct(id:ID!,title: String, price: Float, description: String): Product,\n    deleteProduct(id:ID!): Product\n  }\n"])));