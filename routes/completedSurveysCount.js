var SurveyResponse = require('../models/SurveyResponse');

// Grab survey completion stats and send them to the UI
module.exports = function(request, response) {
    SurveyResponse.find({
        complete: true
    }).limit(100).exec(function(err, complete) {
        if (err) {
            response.status(500).send(err);
        } else {
            console.log(complete.length);
            
        SurveyResponse.find({
             complete: false
        }).limit(100).exec(function(err, incomplete) {
           if (err) {
               response.status(500).send(err);
           } else {
                response.send({
                completed: complete.length,
                incomplete: incomplete.length
            });
          }
         });
        }
    });
};