// Run this:
// node app.js
//
// Then browse here:
// http://localhost:8001/
//
// Press cntrl C to exit

var http = require('http');
var port = process.env.PORT || 8001;

http.createServer(function (req, res) {

	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World\n');

}).listen(port);

console.log('Server running at http://localhost:'+port+'/');
