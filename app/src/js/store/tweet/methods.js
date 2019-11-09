import io from 'socket.io-client'
export default {
	addTweet: () => {
		
	},
	getTweet: (token) => {
		io.emit('getTweet', token)
		io.on('getTweet', (data) => {
			console.log(data)
		})
	}
}