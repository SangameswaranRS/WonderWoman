(function () {
    var updateCrimeDAO=require('../DataAccessObject/updateCrimeDAO');
    var PythonShell=require('python-shell');
    module.exports.updateCrimeInfo=function (req,res) {
      var postParams={
          latitude : req.body.latitude,
          longitude : req.body.longitude,
          crimeTimeInEpoch : Date.now()
      };
       updateCrimeDAO.updateCrime(postParams,function (err,data) {
          if(err){
              var failureJson={
                  statusCode : 500,
                  message :err.message
              };
              res.status(500).send(failureJson);
          }else {
              var successJson={
                  statusCode :200,
                  message : 'Crime reported successfully',
                  crimeId :data.insertId
              };
              res.send(successJson);
              //call to invoke python script.
              invokePredictionScript();
          }
       });
    };
    var invokePredictionScript=function () {
        var options = {
            mode: 'text',
            pythonPath: 'C:/Program Files/Python36/python.exe',
            pythonOptions: [],
            scriptPath: 'C:/Users/Sangameswaran/WebstormProjects/WonderWoman/PythonScripts',
            args: ['Fuck At last']
        };
        PythonShell.run('womenSafety.py', options, function (err, results) {
            if (err) throw err;
            console.log('results: %j', results);
        });
        console.log('Script Invoked');
    };
})();