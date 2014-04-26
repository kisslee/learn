var http = require('http');
var url = require('url');

function start(route, handle){
	function onRequest(request, response){
		var postData = '';
		var pathname = url.parse(request.url).pathname;
		console.log('Request for ' + pathname + ' received.');
		
		route(handle, pathname, request, response);

		// request.addListener('data', function(postDataChunk){
		// 	postData += postDataChunk;
		// 	console.log('Received POST data chunk \'' + postDataChunk + '\' .');
		// });

		// request.addListener('end', function(){
		// 	route(handle, pathname, response, postData);
		// });
	}

	http.createServer(onRequest).listen(8999);

	console.log('Server is starting...');
}

exports.start = start;
