/**
 * Created by home on 2/1/16.
 */

var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

// /about
// About Us
app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('This is about page');
});

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);

app.listen(PORT, function(){
    console.log('Express server started on PORT ' + PORT + '!');
});
