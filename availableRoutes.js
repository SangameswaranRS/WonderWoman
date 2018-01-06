(function () {
    var express=require('express');
    var Router=express.Router();
    var createUserController=require('./Controller/createUserController');
    var updateCrimeController=require('./Controller/updateCrimeController');
    var updatePredictionController=require('./Controller/updatePredictonController');
    var getPredictionForCrimeIdController=require('./Controller/getPredictionForCrimeIdController');
    var updateUserController=require('./Controller/updateUserController');
    Router.get('/testConnection',function (req,res) {
       res.send("Connection Ok");
    });
    Router.post('/createUser',function (req,res) {
        createUserController.createUser(req,res);
    });
    Router.post('/updateCrime',function (req,res) {
        updateCrimeController.updateCrimeInfo(req,res);
    });
    Router.post('/updatePredictionForACrime',function (req,res) {
        updatePredictionController.updatePredictionFromScript(req,res);
    });
    Router.post('/getPredictionForCrimeId',function (req,res) {
        getPredictionForCrimeIdController.getPreditionForCrimeId(req,res);
    });
    Router.post('/updateUser',function (req,res) {
        updateUserController.updateUserInfo(req,res);
    });
    module.exports=Router;
})();