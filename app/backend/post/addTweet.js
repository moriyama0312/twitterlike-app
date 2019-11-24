import connection from '../db/connection';

export default(contents, id, callback) => {
	const sql = ``;

	connection.query(sql, (err, results, fiels) => {
		if(err) {
			callback(null, 'mysql err!');
		}else {
			callback(results[0]);
		}
	})
}