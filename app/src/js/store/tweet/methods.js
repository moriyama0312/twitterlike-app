import io from 'socket.io-client'
export default {
	addTweet: (info, callback) => {
		const socket = io()
		socket.emit('addTweet', info)
	},
	getTweet: (token, callback) => {
		const socket = io()
		socket.emit('getTweet', token)
		socket.on('getTweet', (data) => {
			callback(data)
		})
	}
}