//including the core http module of node
var http = require('http');

//including the file system module - manipulate files
var fs = require('fs');
//configures path according to the platform it is running on (backslash and forward slashes)
var path = require('path');

//setting hostname and port number
var hostname = 'localhost';
var port = 8000;

//configuring the server
//processing GET request
//other requests are not recognized
var server = http.createServer(function(req, res){

	console.log('Request for '+req.url+' by method '+ req.method);

	if(req.method == 'GET')
	{
		var fileUrl;

		//file not mentioned is interpreted as index.html	
		if(req.url == '/')
			fileUrl = '/index.html';
		else
			fileUrl = req.url;

		//gives the file path from the root folder	
		var filePath = path.resolve('./public'+fileUrl);

		//gives me the extension of the file	
		var fileExt = path.extname(filePath);

		if(fileExt == '.html')
		{
			fs.exists(filePath, function(exists){

				if(!exists)
				{
					res.writeHead(404, {'Content-Type': 'text/html'});
					res.end('<h1>ERROR 404: '+fileUrl+' not found</h1>');
					return;
				}

				res.writeHead(200, {'Content-Type': 'text/html'});
				fs.createReadStream(filePath).pipe(res);
			});
		}
		else
		{

			res.writeHead(404, {'Content-Type': 'text/html'});
			res.end('<h1>ERROR 404: '+fileUrl+' not a HTML file.</h1>');		
		}
	}
	else
	{
		res.writeHead(404, {'Content-Type': 'text/html'});
		res.end('<h1>ERROR 404: '+req.method+' not supported.</h1>');
	}

});

//binding to the port and listening
server.listen(port, hostname, function(){
	console.log('Server is running at http://'+hostname+':'+port);
});
