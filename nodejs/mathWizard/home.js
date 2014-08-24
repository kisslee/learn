var htutil = require('./htutil');

exports.get = function(req, res){

    res.writeHead(200, {'Content-Type':'text/html'});

    var result = req.a * req.b;
    res.end(htutil.page('Home',htutil.navbar(),"Welcome to this application."
    ));
};