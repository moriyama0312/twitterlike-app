import express from 'express';
import bodyParser from 'body-parser';
import socketIO from 'socket.io';
import dbCheck from './db/dbCheck';
import getProfile from './get/profile';
import getTweet from './get/tweet';
import addTweet from './post/addTweet';
import jwtFunc from './jwt/index.js';
import toolFuncs from './tools/func.js';

export default (app, http) => {
	app.use(express.json());
	app.use(bodyParser.urlencoded({extended: true}));
  	app.use(bodyParser.json());

	app.post('/user/token', async (req, res) => {
		const check = await dbCheck(req.body);
		if(check) {
			const token = await jwtFunc.encode(req.body);
			res.send(JSON.stringify(token));
		}else {
			res.send('validate err!');
		}
	});
	app.get('/user/id', async (req, res) => {
		const token = toolFuncs.removeBearer(req.headers.authorization);
		const id = await jwtFunc.decode(token);
		res.send(JSON.stringify(id));
	});
	app.get('/user/profile', async (req, res) => {
		const token = toolFuncs.removeBearer(req.headers.authorization);
		const id = await jwtFunc.decode(token);
		const profile = await getProfile(id);
		res.send(JSON.stringify(profile));
	});
	// optional support for socket.io
	// 
	let io = socketIO(http);
	io.on('connection', socket => {
		socket.on('getTweet', async (data) => {
			const id = await jwtFunc.decode(data.token);
			const tweet = await getTweet(id);
			socket.emit('getTweet', tweet);
		});
		socket.on('addTweet', async (data) => {
			const id = await jwtFunc.decode(data.token);
			const maxId = await addTweet(data, id);
			const tweet = await getTweet(id, maxId);
			socket.emit('addTweet', tweet);
		});
	});
}
