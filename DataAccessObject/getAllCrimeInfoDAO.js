(function () {
    var connection=require('../Connection/connection');
    module.exports.getCrimes=function (callBack) {
        connection.query('select * from crime_info',function (err,data) {
           callBack(err,data);
        });
    }
})();