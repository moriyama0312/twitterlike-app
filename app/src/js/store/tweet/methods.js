import io from 'socket.io-client'
const getContentsBySocket = (socket, type, token) => {
	return new Promise(resolve => {
		socket.emit(type, token)
		socket.on(type, (data) => {
			resolve(data)
		})
	})
}
const addContentsBySocket = (socket, type) => {
	return new Promise(resolve => {
		socket.on(type, (data) => {
			resolve(data)
		})
	})
}
export default {
	addTweet: async (info) => {
		const socket = io()
		socket.emit('addTweet', info)
		const data = await addContentsBySocket(socket, 'addTweet')
		return data
	},
	getTweet: async (token) => {
		const socket = io()
		const data = await getContentsBySocket(socket, 'getTweet', token)
		return data
	}
}