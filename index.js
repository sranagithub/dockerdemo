var express = require('express');
var bodyParser = require('body-parser');
//var swaggerJSDoc = require('swagger-jsdoc');
var middleware = require('swagger-express-middleware');
var app = express();
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('./clients.js')(app);
app.listen(3000);
console.log("Server started at 3000")
