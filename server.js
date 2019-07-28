var websocket = require('websocket');

var options = { port : 9999 }

function Listener(ws)
{
	console.log('Client connected!');
	ws.on('message', function(msg) { 
		console.log('<<<>>>');
		console.log('Echoing message: '+msg);
		ws.send(msg.toString(), {mask:true, binary:false}); 
	});
};

var server = new websocket.Server(options, Listener);
