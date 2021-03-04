"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var config = require("../configs");

var port = config.server.port;

var apiRouter = require('../routes');

var schema = require('../apollo/schemas');

var resolvers = require('../apollo/resolvers');

var _require = require('apollo-server-express'),
    ApolloServer = _require.ApolloServer,
    gql = _require.gql;

var graphQlServer = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers
});
graphQlServer.applyMiddleware({
  app: app,
  path: "/graphql"
});
app.use(bodyParser.json());
app.use('/api/v1', apiRouter);

exports.start = function () {
  app.listen(port, function (err) {
    if (err) {
      console.log("Errors: ".concat(err));
      process.exit(-1);
    }

    console.log("app is runnning on port ".concat(port));
  });
};