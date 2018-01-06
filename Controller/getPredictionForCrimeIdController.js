(function () {
    var getPredictionForCrimeIdDAO=require('../DataAccessObject/getPredictionForCrimeIdDAO');
    module.exports.getPreditionForCrimeId=function (req,res) {
      var crimeId = req.body.crimeId;
      if(crimeId !==undefined){
            getPredictionForCrimeIdDAO.getPrediction(crimeId,function (err,data) {
               if(err){
                   var errorJson={
                        statusCode : 200,
                        message : err.message
                   };
                   res.status(500).send(errorJson);
               } else{
                   var successJson={
                       statusCode :200,
                       message : data
                   };
                   res.send(successJson);
               }
            });
      }else{
          var failureJson={
              statusCode :400,
              message : 'Bad Request'
          };
          res.status(400).send(failureJson);
      }
    };
})();