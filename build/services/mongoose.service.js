"use strict";

var mongoose = require('mongoose');

var config = require('../configs');

var uri = config.database.url;

exports.dbConnect = function () {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }).then(function () {
    console.log("successfully connected to the database");
  })["catch"](function (err) {
    console.log("couldnt connect to the database", err);
    process.exit();
  });
};