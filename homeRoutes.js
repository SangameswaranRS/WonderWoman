(function () {
    module.exports=function (app) {
        app.use('/server/api',require('./availableRoutes'));
    }
})();