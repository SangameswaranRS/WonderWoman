(function () {
   var connection=require('../Connection/connection');
   module.exports.updateUserInfo=function (userId,userName,userEmailId,emergencyContact1,emergencyContact2,userHomeAddress,userAge,callBack) {
       connection.query('update user_info set userName=?,userEmailId=?,emergencyContact1=?,emergencyContact2=?,userHomeAddress=?,userAge=? where userId=?',[userName,userEmailId,emergencyContact1,emergencyContact2,userHomeAddress,userAge,userId],function (err,data) {
           callBack(err,data);
       });
   }
})();