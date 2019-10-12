import express from 'express';
import bodyParser from 'body-parser';
import socketIO from "socket.io";

export default (app, http) => {
	app.use(express.json());
	app.use(bodyParser.urlencoded({extended: true}));
  	app.use(bodyParser.json());

	app.post('/user/token', (req, res) => {
		let result = getJwt(req.body);
	});
	//
	// app.get('/foo', (req, res) => {
	//   res.json({msg: 'foo'});
	// });
	//
	// app.post('/bar', (req, res) => {
	//   res.json(req.body);
	// });
	// 
	// optional support for socket.io
	// 
	// let io = socketIO(http);
	// io.on("connection", client => {
	// 	client.on("message", function(data) {
	// 	// do something
	// 	});
	// 	// client.emit("message", "Welcome");
	// });
}
