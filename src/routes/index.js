const express = require('express');
const router = express.Router();
const usersRouter = require('./users.route');
// const productsRouter = require('./products.route');

router.use(usersRouter);
// router.use(productsRouter);

module.exports = router;