var http = require('http');
http.createServer(function(request,response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello Node\n');
}).listen(9001);

console.log('Server running at http://127.0.0.1:9001/');
console.time('100-elements');
for (var i = 0; i < 100; i++) {
    ;
}
console.timeEnd('100-elements');
