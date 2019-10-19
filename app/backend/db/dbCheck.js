import connection from './connection.js';

export default (userInfo, callback) => {
	const id = userInfo.id;
	const pw = userInfo.password;
	const sql = `SELECT *
				FROM user_info
				WHERE user_info.id = ${id};`;

	connection.query(sql, (err, results, fields) => {
		if(err) {
			callback(null, 'mysql error!');
		}else {
			if(validateDB(results, id, pw)) {
				callback(results);
			}else {
				callback(null, 'validate error!');
			}
		}
	});

}

const validateDB = (data, id, pw) => {
	if(data.id === id && data.password === pw) {
		return true;
	}else {
		return false;
	}
}