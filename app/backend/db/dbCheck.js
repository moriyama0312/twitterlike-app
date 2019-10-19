import connection from './connection.js';

export default (userInfo, callback) => {
	const id = userInfo.id;
	const pw = userInfo.password;
	const sql = ``;

	connection.query(sql, (err, results, fields) => {
		if(err) {
			callback(null, 'mysql error!');
		}else {
			callback(results);
		}
	});

}