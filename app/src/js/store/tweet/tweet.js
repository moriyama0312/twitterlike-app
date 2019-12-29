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
			let tweetArray = Array.from(state.tweet)
			let tmp = tweetArray[0]
			for(let i = 0; i < tweetArray.length - 1; i++) {
				for(let j = tweetArray.length - 1; j > i; j--) {
					if(tweetArray[j].tweet_time > tweetArray[j-1].tweet_time) {
						tmp = tweetArray[j-1]
						tweetArray[j-1] = tweetArray[j]
						tweetArray[j] = tmp
					}
				}
				if(i === tweetArray.length - 2) {
					return tweetArray
				}
			}
		},
		pickTweet: (state) => (tweetId) => {
			let result = state.tweet.filter(item => item.tweet_id === Number(tweetId))[0]
			return result
		}
	},
	actions: {
		tweet: (ctx, contents) => {
			contents = Object.assign({}, contents, {token:localStorage.token})
			tweetFuncs.addTweet(contents)
		},
		getTweet: async (ctx, data) => {
			return await tweetFuncs.getTweet(data)
				.then((res) => {
					ctx.commit('setTweet', res)
				})
		}
	}
}