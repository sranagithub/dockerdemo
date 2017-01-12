var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var swaggerJSDoc = require('swagger-jsdoc');
var middleware = require('swagger-express-middleware');
var app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/clientDatabase', function (error) {
    if (error) {
        console.log(error);
    }
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

require('./clients.js')(app);

app.listen(3000);
console.log("Server started at 3000: Just for change")
