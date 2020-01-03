export default (type, payload={}) => {
	switch(type) {
		case 'ADD_TWEET':
			return `INSERT INTO tweet_all_test
					VALUES(
						${payload.maxId},
						'${payload.id}',
						'${payload.text}',
						${payload.images.img01},
						${payload.images.img02},
						${payload.images.img03},
						${payload.images.img04},
						'${payload.tweetTime}',
						${payload.replyNum},
						${payload.retweetNum},
						${payload.favoriteNum}
					);`;
		case 'GET_MAX_TWEET_ID':
			return `SELECT *
					FROM max_tweet_id_test;`;
		case 'UPDATE_MAX_TWEET_ID':
			return `UPDATE max_tweet_id_test
					SET max_id = ${payload.maxId};`;
		case 'GET_TWEET':
			if(payload.maxId === -1) {
				return `SELECT *
						FROM tweet_all_test
						JOIN user_info_test
						ON tweet_all_test.user_id = user_info_test.user_id
						WHERE tweet_all_test.user_id IN (
							SELECT followed_id
							FROM followers_test
							WHERE following_id = '${payload.id}')
						OR tweet_all_test.user_id = '${payload.id}';`;
			}else {
				return `SELECT *
						FROM tweet_all_test
						JOIN user_info_test
						ON tweet_all_test.user_id = user_info_test.user_id
						WHERE tweet_all_test.tweet_id = ${payload.maxId};`;
			}
		case 'GET_REPLY':
			return `SELECT *
					FROM action_reply_test
					WHERE root_tweet_id = ${payload.tweetId};`;
		case 'GET_USER_INFO':
			return `SELECT *
					FROM user_info_test
					WHERE user_id = '${payload.userId}';`;
	}
}