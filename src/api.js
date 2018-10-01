var express = require('express');
var resquel = require('resquel');

// Create the Express.js application.
var app = express();

// Include the resquel library.
app.use(resquel(config));

// Listen to port 3000.
app.listen(3000);