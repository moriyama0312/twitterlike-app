import mysqlConnection from '../db/connection';

export default async (data) => {
	const connection = await mysqlConnection();
	const id = data.id;
	const sql = `SELECT *
				FROM tweet_all_test
				JOIN user_info_test
				ON tweet_all_test.user_id = user_info_test.user_id
				WHERE tweet_all_test.user_id IN (
					SELECT followed_id
					FROM followers_test
					WHERE following_id = '${id}')
				OR tweet_all_test.user_id = '${id}';`;
	
	const [row, fields] = await connection.execute(sql);

	return row;
}