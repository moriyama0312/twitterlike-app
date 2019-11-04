import connection from '../db/connection';

export default (data, callback) => {
	const id = data.id;
	const sql = `SELECT *
				FROM user_info_test
				WHERE user_info_test.user_id = '${id}';`;
	
	connection.query(sql, (err, results, field) => {
		if(err) {
			callback(null, 'mysql err!');
		}else {
			console.log(results[0]);
			callback(results[0]);
		}
	});
}