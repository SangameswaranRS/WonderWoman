(function () {
    var getAllCrimeDAO=require('../DataAccessObject/getAllCrimeInfoDAO');
    module.exports.getAllCrime=function (req,res) {
        getAllCrimeDAO.getCrimes(function (err,data) {
           if(err){
               var failureResponse={
                   statusCode : 200,
                   message : err.message
               };
               res.status(500).send(failureResponse);
           } else{
               var successResponse={
                   statusCode : 200,
                   message : data
               };
               res.send(successResponse);
           }
        });
    };
})();