import tweetFuncs from './methods'
export default {
	namespaced: true,
	state: {

	},
	mutations: {

	},
	getters: {

	},
	actions: {
		tweet: (ctx, contents) => {
			tweetFuncs.addTweet(contents)
		},
		getTweet: (ctx, data) => {
			
		}
	}
}