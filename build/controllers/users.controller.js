"use strict";

var User = require('../models/user.model');

var bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');

var config = require('../configs');

exports.register = function (req, res) {
  var hashedPassword = bcrypt.hashSync(req.body.password, 10);
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    isAdmin: req.body.isAdmin,
    age: req.body.age,
    password: hashedPassword
  });
  user.save().then(function (data) {
    var userToken = jwt.sign({
      id: data._id,
      admin: data.isAdmin
    }, config.jwt.secret, {
      expiresIn: 86400
    });
    res.send({
      auth: true,
      token: userToken
    });
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || 'Some error occured'
    });
  });
};

exports.login = function (req, res) {
  console.log(req.body);
  User.findOne({
    email: req.body.email
  }).then(function (user) {
    if (!user) {
      return res.status(404).send({
        message: "no user finf with email ".concat(req.body.email)
      });
    }

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        auth: false,
        token: null
      });
    }

    var userToken = jwt.sign({
      id: user._id,
      admin: user.isAdmin
    }, config.jwt.secret, {
      expiresIn: 86400
    });
    res.status(200).send({
      auth: true,
      token: userToken
    });
  })["catch"](function (err) {
    res.status(404).send(err);
  });
};

exports.logout = function (req, res) {
  res.status(200).send({
    auth: false,
    token: null
  });
};

exports.getMe = function (req, res) {
  User.findById(req.params.id).then(function (user) {
    if (!user) {
      return res.status(404).send({
        message: "user not found with id ".concat(req.params.id)
      });
    }

    res.send(user);
  })["catch"](function (err) {
    return res.status(404).send({
      message: err.message
    });
  });
};