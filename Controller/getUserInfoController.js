(function () {
    var getUserInfoDAO=require('../DataAccessObject/getUserInfoDAO');
    module.exports.getUserInfo=function (req,res) {
        var userId=req.body.userId;
        if(userId!==undefined){
            getUserInfoDAO.getUserDetails(userId,function (err,data) {
               if(err){
                   var failureJson={
                       statusCode : 200,
                       message : err.message
                   };
                   res.status(500).send(failureJson);
               } else {
                   var successJson={
                       statusCode : 200,
                       message : data
                   };
                   res.send(successJson);
               }
            });
        }
    };
})();