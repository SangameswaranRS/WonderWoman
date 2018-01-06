(function () {
    var connection=require('../Connection/connection');
    module.exports.connectionChecker=function (req,res,next) {
        if(connection.state === 'disconnected') {
            console.log('server down Attempting Reconnection');
            connection.connect(function (err) {
                if(err){
                    console.log('error connecting to database shutting down server');
                    var connErrJson={
                        statusCode : 500,
                        message : 'Database Server down'
                    };
                    res.status(500).send(connErrJson);
                    process.exit();
                } else{
                    console.log('connected to database');
                    next();
                }
            });
        }else{
            console.log('DB Connection status : Connected');
            next();
        }
    };
})();