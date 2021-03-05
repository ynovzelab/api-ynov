"use strict";

var express = require('express');

var router = express.Router();

var ordersRouter = require('./orders.route');

var usersRouter = require('./users.route'); // const productsRouter = require('./products.route');


router.use(usersRouter);
router.use(ordersRouter); // router.use(productsRouter);

module.exports = router;