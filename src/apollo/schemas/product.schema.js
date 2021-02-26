const {gql} = require('apollo-server-express');

module.exports = gql`
  type Product {
    id: ID!
    title: String
    price: Float!
    description: String
  }
  extend type Query {
    products: [Product]
    product(id: ID!): Product
  }
  extend type Mutation {
    createProduct(title: String, price: Float, description: String): Product,
    updateProduct(id:ID!,title: String, price: Float, description: String): Product,
    deleteProduct(id:ID!): Product
  }
`;
