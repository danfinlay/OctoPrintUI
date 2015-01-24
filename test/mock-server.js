var testPort = 7073;

var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: testPort });

server.start(function(){
	console.log("Test server running at "+server.info.uri);
});

server.route({
	method: 'GET',
	path: '/',
	handler: function( req, res) {
		res.file(__dirname+'/mocks/index.json');
	}
});


