(function () {
    var updateUserDAO=require('../DataAccessObject/updateUserDAO');
    module.exports.updateUserInfo=function (req,res) {
        var userEmailId=req.body.userEmailId;
        var emergencyContact1=req.body.emergencyContact1;
        var emergencyContact2=req.body.emergencyContact2;
        var userName= req.body.userName;
        var userHomeAddress=req.body.userHomeAddress;
        var userId=req.body.userId;
        var userAge=req.body.userAge;
        updateUserDAO.updateUserInfo(userId,userName,userEmailId,emergencyContact1,emergencyContact2,userHomeAddress,userAge,function (err,data) {
           if(err){
               var failureJson={
                   statusCode :500,
                   message : err.message
               };
               res.status(500).send(failureJson);
           } else {
               var successJson={
                   statusCode : 200,
                   message : 'User Info updated successfully'
               };
               res.send(successJson);
           }
        });
    };
})();