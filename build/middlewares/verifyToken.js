"use strict";

var jwt = require('jsonwebtoken');

var config = require('../configs');

function verifyToken(req, res, next) {
  var token = req.headers.authorization;

  if (!token) {
    return res.status(403).send({
      auth: false,
      message: "missing token, please login"
    });
  }

  jwt.verify(token, config.jwt.secret, function (err) {
    if (err) {
      return res.status(401).send({
        auth: false,
        message: "no authorized"
      });
    }

    next();
  });
}

module.exports = verifyToken;