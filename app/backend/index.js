import express from 'express';
import bodyParser from 'body-parser';
// import socketIO from 'socket.io';
import dbCheck from './db/dbCheck';
import getProfile from './get/profile';
import jwtFunc from './jwt/index.js';
import toolFuncs from './tools/func.js';
import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';

export default (app, http) => {
	app.use(express.json());
	app.use(bodyParser.urlencoded({extended: true}));
  	app.use(bodyParser.json());

	app.post('/user/token', (req, res) => {
		dbCheck(req.body, (data, err='') => {
			if(err) {
				res.send(err);
			}else {
				const token = jwtFunc.encode(req.body);
				res.send(JSON.stringify(token));
			}
		});
	});
	app.get('/user/id', async (req, res) => {
		const token = toolFuncs.removeBearer(req.headers.authorization);
		const id = await jwtFunc.decode(token);
		res.send(JSON.stringify(id));
	});
	app.get('/user/profile', async (req, res) => {
		const token = toolFuncs.removeBearer(req.headers.authorization);
		const id = await jwtFunc.decode(token);
		getProfile(id, (data, err='') => {
			if(err) {
				res.send(err);
			}else {
				res.send(JSON.stringify(data));
			}
		});
	});
	app.get('/tweet', async (req, res) => {
		const token = toolFuncs.removeBearer(req.headers.authorization);
		const id = await jwtFunc.decode(token);
		getTweet(id, (data, err='') => {
			if(err) {
				res.send(err);
			}else {
				res.send(JSON.stringify(data));
			}
		});
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
