var SurveyResponse = require('../models/SurveyResponse');

// Grab survey completion stats and send them to the UI
module.exports = function(request, response) {
    SurveyResponse.find({
        complete: true
    }).limit(100).exec(function(err, complete) {
        if (err) {
            response.status(500).send(err);
        } else {
            
        SurveyResponse.find({
             complete: false
        }).limit(100).exec(function(err, incomplete) {
           if (err) {
               response.status(500).send(err);
           } else {
               var totalSurveysStarted = complete.length + incomplete.length;
                response.send({
                completed: complete.length,
                incomplete: incomplete.length,
                totalSurveysStarted: totalSurveysStarted
            });
          }
         });
        }
    });
};