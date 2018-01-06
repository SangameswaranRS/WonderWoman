(function () {
    var connection=require('../Connection/connection');
    module.exports.updateCrime=function (jsonBody,callBack) {
        connection.query('insert into crime_info set ? ',jsonBody,function (err,data) {
           callBack(err,data);
        });
    };
})();