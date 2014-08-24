var http_port = 8999;

var http = require('http');
var htutil = require('./htutil');

var server = http.createServer(function(req, res){
    htutil.loadParams(req, res, undefined);
    if(req.requrl.pathname === '/'){
        require('./home').get(req, res);
    }else if(req.requrl.pathname === '/square'){ //计算平方
        require('./square').get(req, res);
    }else if(req.requrl.pathname === '/fact'){ //计算阶乘
        require('./fact').get(req, res);
    }else if(req.requrl.pathname === '/fibo'){ //计算斐波那契数
        require('./fibo').get(req, res);
    }else if(req.requrl.pathname === '/mult'){ //计算相乘
        require('./mult').get(req, res);
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('not found url: ' + req.url);
    }
}).listen(http_port, '127.0.0.1');

console.log('starting in ' + http_port);