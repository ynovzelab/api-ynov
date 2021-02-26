const { gql } = require('apollo-server-express');

const productSchema = require('./product.schema.js');

const linkSchema = gql`
    type Query {
        _:Boolean
    }
    type Mutation {
        _: Boolean
    }
`;

module.exports = [linkSchema, productSchema]

