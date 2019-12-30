import mysqlConnection from '../db/connection';
import sqlGenerator from '../sql/sqlGenerator';

export default async (data, maxId = -1) => {
	const connection = await mysqlConnection();
	const id = data.id;
	const payload = Object.assign({}, {id: id}, {maxId: maxId});
	const sql = sqlGenerator('GET_TWEET', payload);
	
	const [row, fields] = await connection.execute(sql);

	return row;
}