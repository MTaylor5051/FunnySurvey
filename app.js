var path = require('path');
var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var urlencoded = require('body-parser').urlencoded;
var voice = require('./routes/voice');
var message = require('./routes/message');
var results = require('./routes/results');

// initialize MongoDB connection
require('./models/db');

// Create Express web app with some useful middleware
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(urlencoded({ extended: true }));
app.use(morgan('combined'));

// Twilio Webhook routes
app.post('/voice', voice.interview);
app.post('/voice/:responseId/transcribe/:questionIndex', voice.transcription);
app.post('/message', message);

// Ajax route to aggregate response data for the UI
app.get('/results', results);

module.exports = app;