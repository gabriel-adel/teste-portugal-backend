const app = require('./config/customApp')

const serverless = require('serverless-http')

module.exports.run = serverless(app);

