(function () {
    var updatePredictionDAO=require('../DataAccessObject/updatePredictionDAO');
    module.exports.updatePredictionFromScript=function (req,res) {
        var jsonBody={
            crimeId : req.body.crimeId,
            prediction :req.body.prediction
        };
        updatePredictionDAO.updatePrediction(jsonBody,function (err,data) {
           if(err){
               var failureJson={
                   statusCode :500,
                   message : err.message
               };
               res.status(500).send(failureJson);
           }else{
               var successJson={
                   statusCode : 200,
                   message : "Prediction Updated Successfully"
               };
               res.send(successJson);
           }
        });
    };
})();