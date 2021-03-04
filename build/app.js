"use strict";

require('dotenv').config();

var app = require("./services/server.service");

var mongoService = require("./services/mongoose.service");

mongoService.dbConnect();
app.start();