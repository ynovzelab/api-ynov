"use strict";

var dbConfig = require('./db.config');

var serverConfig = require('./server.config');

var jwtConfig = require('./jwt.config');

exports.database = dbConfig;
exports.server = serverConfig;
exports.jwt = jwtConfig;