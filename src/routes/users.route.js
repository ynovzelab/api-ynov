const express = require("express");
const router = express.Router();
const users = require('../controllers/users.controller');
const verifyToken = require('../middlewares/verifyToken');

router.post('/register',users.register);
router.post('/login', users.login);
router.get('/logout', users.logout);
router.get('/user/:id', verifyToken, users.getMe);

module.exports = router;