import connection from '../db/connection';

export default (data, callback) => {
	const id = data.id;
	const sql = `SELECT *
				FROM tweet_all_test
				JOIN user_info_test
				ON tweet_all_test.user_id = user_info_test.user_id
				WHERE tweet_all_test.user_id IN (
					SELECT followed_id
					FROM followers_test
					WHERE following_id = '${id}');`;
	
	connection.query(sql, (err, results, field) => {
		if(err) {
			callback(null, 'mysql error!');
		}else {
			callback(results);
		}
	});
}