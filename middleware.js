/**
 * Created by home on 2/2/16.
 */

// use module exports to expose middleware
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

module.exports = middleware;