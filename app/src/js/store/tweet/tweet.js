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
		sortTweet: (state) => {
			let tweetArray = state.tweet
			let tmp = tweetArray[0]
			for(let i = 0; i < state.tweet.length - 1; i++) {
				for(let j = state.tweet.length - 1; j > i; j--) {
					if(tweetArray[j].birth > tweetArray[j-1].birth) {
						tmp = tweetArray[j-1]
						tweetArray[j-1] = tweetArray[j]
						tweetArray[j] = tmp
					}
				}
				if(i === state.tweet.length - 2) {
					return tweetArray
				}
			}
		}
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