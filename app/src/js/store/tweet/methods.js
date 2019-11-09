import io from 'socket.io-client'
export default {
	addTweet: () => {
		
	},
	getTweet: (token) => {
		const socket = io()
		socket.emit('getTweet', token)
		socket.on('getTweet', (data) => {
			console.log(data)
		})
	}
}