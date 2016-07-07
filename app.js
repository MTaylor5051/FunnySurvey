var path = require('path');
var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var urlencoded = require('body-parser').urlencoded;

// initialize MongoDB connection
require('./models/db');

// Create Express web app with some useful middleware
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(urlencoded({ extended: true }));
app.use(morgan('combined'));

// Twilio Webhook routes
var routes = require('./routes/router');
app.use('/', routes);

module.exports = app;