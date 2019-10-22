import express from 'express';
import bodyParser from 'body-parser';
// import socketIO from 'socket.io';
import dbCheck from './db/dbCheck';
import jwtFunc from './jwt/index.js';
import toolFuncs from './tools/func.js';
import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';

export default (app, http) => {
	app.use(express.json());
	app.use(bodyParser.urlencoded({extended: true}));
  	app.use(bodyParser.json());

	app.post('/user/token', (req, res) => {
		console.log("koko");
		console.log(req.body);
		dbCheck(req.body, (data, err='') => {
			if(err) {
				res.send(err);
			}else {
				const token = jwtFunc.encode(req.body);
				// const result = Object.assign(data, {token});
				res.send(JSON.stringify(token));
			}
		});
	});
	app.get('/user/id', async (req, res) => {
		console.log("kotti");
		const token = toolFuncs.removeBearer(req.headers.authorization);
		const id = await jwtFunc.decode(token);
		res.send(JSON.stringify(id));
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
