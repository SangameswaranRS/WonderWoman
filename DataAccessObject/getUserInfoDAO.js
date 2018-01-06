(function () {
    var connection=require('../Connection/connection');
    module.exports.getUserDetails=function (userId,callBack) {
      connection.query('select * from user_info where userId=?',userId,function (err,data) {
          callBack(err,data);
      });
    };
})();