/**
 * Created by home on 2/1/16.
 */

var express = require('express');
var app = express();
var port = 3000;

var middleware = {
    requireAuthentication: function(req, res, next){
        console.log('private route hit!');
        next();
    },
    logger: function(req, res, next){
        // new Date().toString()
        console.log('Request : ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
        next();
    }
};

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

// /about
// About Us
app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('We at SystemServ are working in multiple domains like web / mobile development, 3D Printing, Quantum Computing, Internet Of Things (IOT)');
});

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);

app.listen(port, function(){
    console.log('Express server started on port ' + port + '!');
});