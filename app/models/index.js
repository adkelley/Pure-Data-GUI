var mongoose = require("mongoose");
var uristring = process.env.PROD_MONGODB || process.env.DEV_MONGODB;
mongoose.connect(uristring);

module.exports.mongoose = mongoose;
module.exports.User = require("./user");
