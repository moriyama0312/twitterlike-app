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
			state.reply = Object.assign({}, state.reply, 
				{
					rootTweetId: data.tweetId
				},
				{
					tweet: data.replyInfo.replyList
				},
				{
					userList: data.replyInfo.userList
				}
			)
		},
		addTweet: (state, data) => {
			state.tweet.push(data)
		}
	},
	getters: {
		// type: tweet or reply
		// order: 1 新しい順, 2 古い順, 3 その他
		sortTweet: (state) => (type, order) => {
			let tweetArray  = []
			if(type === 'tweet') {
				tweetArray = Array.from(state.tweet)
			}else {
				tweetArray = Array.from(state.reply.tweet)
			}
			let tmp = tweetArray[0]
			for(let i = 0; i < tweetArray.length - 1; i++) {
				for(let j = tweetArray.length - 1; j > i; j--) {
					if((order === 1 && tweetArray[j].tweet_time > tweetArray[j-1].tweet_time) || (order === 2 && tweetArray[j].tweet_time < tweetArray[j-1].tweet_time)) {
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
		},
		sortReply: (state) => {
			let replyArray = JSON.parse(JSON.stringify(state.reply.tweet))
			// リプライが続いた時の場所へ移動
			// 時系列順にソート済みなので削除対象より必ず前に移動する
			// replyに関しては古い順ソート
			for(let i = replyArray.length - 1; i > 0; i--) {
				if(replyArray[i].target_tweet_id !== state.reply.rootTweetId) {
					let idx = 0
					for(let j = 0; j < replyArray.length; j++) {
						if(replyArray[j].tweet_id === replyArray[i].target_tweet_id) {
							idx = j + 1
						}
					}
					for(let k = i; k > idx; k--) {
						let tmp = replyArray[k]
						replyArray[k] = replyArray[k-1]
						replyArray[k-1] = tmp
					}
				}
			}

			return replyArray
		},
		getReplyData: (state, getters) => {
			const tmp = getters.sortReply
			const obj = Object.assign({}, state.reply, {tweet: tmp})
			return obj
		},
		// conveCheck: (state) => (type) => {
		// 	let tweetArray = []
		// 	if(type === 'tweet') {
		// 		tweetArray = Array.from(state.tweet)
		// 	}else {
		// 		tweetArray = Array.from(state.reply.tweet)
		// 	}
		// 	tweetArray.forEach(tweet => {
		// 		if(tweet.reply_num !== 0 || (type === 'reply' && tweet.target_tweet_id !== tweet.root_tweet_id)) {
		// 			tweet = Object.assign({}, tweet, {isConversation: true})
		// 		}else {
		// 			tweet = Object.assign({}, tweet, {isConversation: false})
		// 		}
		// 	})
		// 	return tweetArray
		// }
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