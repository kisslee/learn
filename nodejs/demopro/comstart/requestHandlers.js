var exec = require('child_process').exec,
       querystring = require('querystring'),
       fs = require('fs'),
       formidable = require('formidable');

function index(request, response){
	console.log('request handler \'index\' was called.');

	// exec('find /git/learn/', 
	// 	{timeout: 10000, maxBuffer: 20000*1024}, function(error, stdout, stderr){
	// exec('ls -lah', function(error, stdout, stderr){
	// 	response.writeHead(200, {'Content-Type': 'text/plain'});
	// 	response.write(stdout);
	// 	response.end();
	// });

	var body = '<html>'+
		'<head>'+
		'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
		'</head>'+
		'<body>'+
		'<form action="/upload" method="post" enctype="multipart/form-data">'+
		'<input type="file" name="upload" /><br/>'+
		'<input type="submit" value="Upload file" />'+
		'</form>'+
		'</body>'+
		'</html>';

	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(body);
	response.end();
}

function upload(request, response){
	console.log('request handler \'upload\' was called.');
	// response.writeHead(200, {'Content-Type': 'text/plain'});
	// response.write('hello upload, you send : ' + 
	// 	querystring.parse(postData).text);
	// response.end();

	var form = new formidable.IncomingForm();
	form.parse(request, function(error, fields, files){
		console.log('parsing form ...');
		fs.rename(files.upload.path, '/tmp/pic.png');
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write('upload image : <br/> <img src="/show" />' );
		response.end();
	});
}

function show(request, response){
	console.log('request handler \'show\' was called.');
	fs.readFile('/tmp/pic.png', 'binary', function(error, file){
		if(error){
			response.writeHead(500, {'Content-Type': 'text/plain'});
			response.write(error + '\n');
			response.end();
		}else{
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(file, 'binary');
			response.end();
		}
	});
}

exports.index = index;
exports.upload = upload;
exports.show = show;
