var resquel = require('../index');
var express = require('express');
var app = express();

// Load the configuration.
var config = require('../src/config.json');

// Add the routes to the router.
config.routes = require('../src/routes/index.js');

// Use the resquel library with the provided configuration.
app.use(resquel(config));

// Listen for requests.
app.listen(config.port);
console.log('Listening to port ' + config.port);
