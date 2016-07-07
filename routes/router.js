
var express = require('express');
var router = express.Router();
var voice = require('./voice');
var message = require('./message');
var results = require('./results');

//Recieving data from Twilio
router.post('/voice', voice.interview);
router.post('/voice/:responseId/transcribe/:questionIndex', voice.transcription);
router.post('/message', message);

// Ajax route to aggregate response data for the UI
router.get('/results', results);

module.exports = router;