
const app = require("./src/services/server.service");
const mongoService = require("./src/services/mongoose.service");
require('dotenv').config()

mongoService.dbConnect();
app.start();