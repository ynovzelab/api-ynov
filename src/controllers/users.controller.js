const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../configs');

exports.register = (req, res) => {
  let hashedPassword = bcrypt.hashSync(req.body.password, 10);

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    isAdmin: req.body.isAdmin,
    age: req.body.age,
    password: hashedPassword,
  });

  user
    .save()
    .then((data) => {
      let userToken = jwt.sign(
        {
          id: data._id,
          admin: data.isAdmin,
        },
        config.jwt.secret,
        {
          expiresIn: 86400,
        }
      );
      res.send({
        auth: true,
        token: userToken,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occured',
      });
    });
};

exports.login = (req, res) => {
  console.log(req.body);
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: `no user finf with email ${req.body.email}`,
        });
      }
      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          auth: false,
          token: null,
        });
      }
      let userToken = jwt.sign(
        {
          id: user._id,
          admin: user.isAdmin,
        },
        config.jwt.secret,
        {
          expiresIn: 86400,
        }
      );

      res.status(200).send({
        auth: true,
        token: userToken,
      });
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};

exports.logout = (req, res) => {
  res.status(200).send({
    auth: false,
    token: null,
  });
};

exports.getMe = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: `user not found with id ${req.params.id}`,
        });
      }
      res.send(user);
    })
    .catch((err) => {
      return res.status(404).send({
        message: err.message,
      });
    });
};
