(function () {
    var connection=require('../Connection/connection');
    module.exports.updateQueryLocation=function (jsonBody,callBack) {
      connection.query('insert into location_query set ?',jsonBody,function (err,data) {
         callBack(err,data);
      });
    };
})();