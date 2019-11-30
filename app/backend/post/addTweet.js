import mysqlConnection from '../db/connection';
import sqlGenerator from '../sql/sqlGenerator';

export default async (contents, id) => {
	const connection = await mysqlConnection();
	let maxId = 0;
	let sql = sqlGenerator('GET_MAX_TWEET_ID');

	let [row, fields] = await connection.execute(sql);

	maxId = row[0].max_id + 1;
	const payload = Object.assign({}, contents, {maxId: maxId}, id);
	sql = sqlGenerator('ADD_TWEET', payload);

	[row, fields] = await connection.execute(sql);

	sql = sqlGenerator('UPDATE_MAX_TWEET_ID', {maxId: maxId});
	[row, fields] = await connection.execute(sql);
}