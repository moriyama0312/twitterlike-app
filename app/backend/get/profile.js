import mysqlConnection from '../db/connection';

export default async (data) => {
	const connection = await mysqlConnection();
	const id = data.id;
	const sql = `SELECT *
				FROM user_info_test
				WHERE user_info_test.user_id = '${id}';`;
	
	const [row, fields] = await connection.execute(sql);
	
	return row[0];
}