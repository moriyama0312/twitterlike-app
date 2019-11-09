import tweetFuncs from './methods'
export default {
	namespaced: true,
	state: {
		tweet: []
	},
	mutations: {
		setTweet: (state, data) => {
			state.tweet = data
		}
	},
	getters: {

	},
	actions: {
		tweet: (ctx, contents) => {
			tweetFuncs.addTweet(contents)
		},
		getTweet: (ctx, data) => {
			tweetFuncs.getTweet(data, (data) => {
				ctx.commit('setTweet', data)
			})
		}
	}
}