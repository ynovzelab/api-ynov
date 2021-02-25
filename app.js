
require('dotenv').config()
const app = require("./src/services/server.service");
const mongoService = require("./src/services/mongoose.service");

mongoService.dbConnect();
app.start();