"use strict";

var _verifyToken = _interopRequireDefault(require("../middlewares/verifyToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require("express");

var router = express.Router();

var users = require('../controllers/users.controller'); // const verifyToken = require('../middlewares/verifyToken');


router.post('/register', users.register);
router.post('/login', users.login);
router.get('/logout', users.logout);
router.get('/user/:id', _verifyToken["default"], users.getMe);
module.exports = router;