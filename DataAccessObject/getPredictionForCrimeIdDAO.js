(function () {
        var connection=require('../Connection/connection');
        module.exports.getPrediction=function (crimeId,callBack) {
          connection.query('select * from crime_to_prediction_map where crimeId=?',crimeId,function (err,data) {
             callBack(err,data);
          });
        };
})();