(function () {
    var connection=require('../Connection/connection');
    module.exports.updatePrediction=function (jsonBody,callBack) {
        connection.query('insert into crime_to_prediction_map set ? ',jsonBody,function (err,data) {
           callBack(err,data);
        });
    }
})();