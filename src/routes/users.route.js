const express = require("express");
const router = express.Router();
const users = require('../controllers/users.controller');

router.post('/register', users.register);
// router.post('login', users.login);
// router.post('logout', users.logout);

//etc...

module.exports = router;