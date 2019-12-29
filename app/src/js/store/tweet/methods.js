import io from 'socket.io-client'
const getContentsBySocket = (socket, type, token) => {
	return new Promise(resolve => {
		socket.emit(type, token)
		socket.on(type, (data) => {
			resolve(data)
		})
	})
}
export default {
	addTweet: (info, callback) => {
		const socket = io()
		socket.emit('addTweet', info)
	},
	getTweet: async (token) => {
		const socket = io()
		const data = await getContentsBySocket(socket, 'getTweet', token)
		return data
	}
}