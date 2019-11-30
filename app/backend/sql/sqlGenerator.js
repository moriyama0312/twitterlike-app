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
	}
}