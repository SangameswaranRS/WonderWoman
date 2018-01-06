var mysql=require('mysql');
var connection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password :'',
    database : 'wonder_woman',
    port : 3306
});
connection.connect(function (err,data) {
    if (err){
        console.log("Error connecting to database Error : "+err);
    }
    else{
        console.log('connected to database- wonder_woman');
    }
});
module.exports=connection;