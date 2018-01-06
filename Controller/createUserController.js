(function () {
    var createUserDAO=require('../DataAccessObject/createUserDAO');
    module.exports.createUser=function (req,res) {
        var postParams={
          userName : req.body.userName,
            userEmailId : req.body.userEmailId,
            emergencyContact1 : req.body.emergencyContact1,
            emergencyContact2 : req.body.emergencyContact2,
            userHomeAddress :req.body.userHomeAddress,
            userAge : req.body.userAge
        };
        createUserDAO.createEntry(postParams,function (err,data) {
            if(err){
                var failureJson={
                    statusCode : 500,
                    message : err.message
                };
                res.status(500).send(failureJson);
            }else{
                var successResponse={
                    statusCode : 200,
                    message : 'User Created successfully',
                    userId :data.insertId
                };
                res.send(successResponse);
            }
        });
    };
})();