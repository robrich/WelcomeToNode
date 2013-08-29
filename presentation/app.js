/*jshint es5:true */
/*global node:true, require:false, process:false, __dirname:false */

var express = require("express"),
	http = require("http");

var app = express(),
	server = http.createServer(app);

app.use(express.static(__dirname));

var port = process.env.PORT || 8010;
server.listen(port, function () {
	console.log("Listening on "+port);
});
