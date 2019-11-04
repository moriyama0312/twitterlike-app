import connection from './connection.js';

export default (userInfo, callback) => {
	const id = userInfo.id;
	const pw = userInfo.password;
	const sql = `SELECT *
				FROM user_info_test
				WHERE user_info_test.user_id = '${id}';`;

	connection.query(sql, (err, results, fields) => {
		if(err) {
			console.log(err);
			callback(null, 'mysql error!');
		}else {
			if(validateDB(results[0], id, pw)) {
				callback(results[0]);
			}else {
				callback(null, 'validate error!');
			}
		}
	});

}

const validateDB = (data, id, pw) => {
	if(data.user_id === id && data.password === pw) {
		return true;
	}else {
		return false;
	}
}