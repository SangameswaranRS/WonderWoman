(function () {
    var queryLocationDAO=require('../DataAccessObject/queryLocationDAO');
    var PythonShell=require('python-shell');
    module.exports.updateQuery=function (req,res) {
      var jsonBody={
          latitude : req.body.latitude,
          longitude : req.body.longitude
      }  ;
      queryLocationDAO.updateQueryLocation(jsonBody,function (err,data) {
         if(err){
             var failureJson={
                 statusCode : 500,
                 message : err.message
             };
             res.status(500).send(failureJson);
         } else{
             //success- Invoke python script;
             var options = {
                 mode: 'text',
                 pythonPath: 'C:/Program Files/Python36/python.exe',
                 pythonOptions: [],
                 scriptPath: 'C:/Users/Sangameswaran/WebstormProjects/WonderWoman/PythonScripts',
                 args: [req.body.latitude,req.body.longitude]
             };
             PythonShell.run('queryPredictor.py', options, function (err, results) {
                 if (err) throw err;
                 var s=results.toString().replace('[','');
                 var r=s.replace(']','');
                 var p=r.replace('\r','');
                 var successJson={
                     statusCode : 200,
                     prediction :p
                 };
                 res.send(successJson);
             });
         }
      });
    };
})();