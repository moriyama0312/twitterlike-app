import tweetFuncs from './methods'
export default {
	namespaced: true,
	state: {
		tweet: [],
		reply: {
			rootTweetId: null,
			tweet: [],
			userList: []
		}
	},
	mutations: {
		setTweet: (state, data) => {
			state.tweet = data
		},
		setReply: (state, data) => {
			state.reply.rootTweetId = data.tweetId
			state.reply.tweet = data.replyInfo.replyList
			state.reply.userList = data.replyInfo.userList
		},
		addTweet: (state, data) => {
			state.tweet.push(data)
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
		tweet: async (ctx, contents) => {
			contents = Object.assign({}, contents, {token:localStorage.token})
			const addTweet = await tweetFuncs.addTweet(contents)
			ctx.commit('addTweet', addTweet[0])
		},
		getTweet: async (ctx, data) => {
			return await tweetFuncs.getTweet(data)
				.then((res) => {
					ctx.commit('setTweet', res)
				})
		},
		getReply: async (ctx, data) => {
			return await tweetFuncs.getReply(data)
				.then((res) => {
					ctx.commit('setReply', {tweetId: data.tweetId, replyInfo: res})
					return res
				})
		}
	}
}