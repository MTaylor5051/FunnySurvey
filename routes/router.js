
var express = require('express');
var router = express.Router();
var voice = require('./voice');
var message = require('./message');
var results = require('./results');
var completedSurveysCount = require('./completedSurveysCount');

//Recieving data from Twilio
router.post('/voice', voice.interview);
router.post('/voice/:responseId/transcribe/:questionIndex', voice.transcription);
router.post('/message', message);

// Ajax routes to aggregate response data for the UI
router.get('/results', results);
router.get('/completedSurveysCount', completedSurveysCount);

module.exports = router;