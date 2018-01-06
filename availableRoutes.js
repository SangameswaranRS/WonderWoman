(function () {
    var express=require('express');
    var Router=express.Router();
    var createUserController=require('./Controller/createUserController');
    var updateCrimeController=require('./Controller/updateCrimeController');
    var updatePredictionController=require('./Controller/updatePredictonController');
    var getPredictionForCrimeIdController=require('./Controller/getPredictionForCrimeIdController');
    var getAllCrimeInfoController=require('./Controller/getAllCrimeInfoController');
    var updateUserController=require('./Controller/updateUserController');
    var getUserInfoController=require('./Controller/getUserInfoController');
    var queryLocationController=require('./Controller/queryLocationController');
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
    Router.get('/getCopNumber',function (req,res) {
       var successJson={
           statusCode : 200,
           message : '9677947957'
       };
       res.send(successJson);
    });
    Router.get('/getAllCrimeInfo',function (req,res) {
        getAllCrimeInfoController.getAllCrime(req,res);
    });
    Router.post('/getUserInfo',function (req,res) {
        getUserInfoController.getUserInfo(req,res);
    });
    Router.post('/queryLocation',function (req,res) {
        queryLocationController.updateQuery(req,res);
    });
    module.exports=Router;
})();