/**
 * Created by Naver on 14. 3. 4.
 *
 * Author : UIT Development Gman.Park
 *
 * Simple Socket IO Chat
 */

var app = require('express')(), 
server = require('http').createServer(app), 
io = require('socket.io').listen(server);

var port = Number(process.env.PORT || 5000);

server.listen(port);

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});


//make connection
io.sockets.on('connection', function(socket) {
	
	socket.on('data-changed', function(packet) {
		socket.broadcast.emit('data-changed',{
			resData: packet.reqData
		});
	});

});
