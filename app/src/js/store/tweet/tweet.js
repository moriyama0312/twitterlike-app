import tweetFuncs from './methods'
export default {
	namespaced: true,
	state: {
		tweet: []
	},
	mutations: {
		setTweet: (state, data) => {
			console.log('setset')
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
			// console.log(typeof tweetId)
			// console.log(state)
			// console.log(state.tweet)
			// let hoge = state.tweet.filter((item) => {
			// 	console.log("aaaa")
			// 	console.log(item)
			// 	return item.tweet_id === Number(tweetId)
			// })
			// console.log(hoge)
			console.log(state.tweet)
			let result = state.tweet.filter(item => item.tweet_id === Number(tweetId))[0]
			console.log(result)
			return result
		}
	},
	actions: {
		tweet: (ctx, contents) => {
			contents = Object.assign({}, contents, {token:localStorage.token})
			console.log(contents)
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