(function () {
    var connection=require('../Connection/connection');
    module.exports.createEntry=function (jsonBody,callBack) {
        connection.query('insert into user_info set ?',jsonBody,function (err,data) {
           callBack(err,data);
        });
    };
})();