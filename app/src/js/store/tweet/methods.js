import io from 'socket.io-client'
export default {
	addTweet: () => {
		
	},
	getTweet: (token, callback) => {
		const socket = io()
		socket.emit('getTweet', token)
		socket.on('getTweet', (data) => {
			callback(data)
		})
	}
}