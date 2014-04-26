function route(handle, pathname, request, response){
	console.log('pathname = ' + pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](request, response);
	}else{
		console.log('no request handler found for ' + pathname);
		response.writeHead(404, {'Content-Type': 'text/plain'});
		response.write('404 Not found');
		response.end();
	}
}

exports.route = route;