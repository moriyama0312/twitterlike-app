import mysqlConnection from '../db/connection';
import sqlGenerator from '../sql/sqlGenerator';

export default async (data, maxId = -1) => {
	const connection = await mysqlConnection();
	const tweetId = data;
	const payload = {tweetId};
	const sql = sqlGenerator('GET_REPLY', payload);
	
	const [row, fields] = await connection.execute(sql);

	return row;
}