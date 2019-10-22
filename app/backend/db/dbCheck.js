import connection from './connection.js';

export default (userInfo, callback) => {
	const id = userInfo.id;
	const pw = userInfo.password;
	const sql = `SELECT *
				FROM user_info_test
				WHERE user_info_test.user_id = '${id}';`;
	console.log("dbcheck");
	console.log(id);
	connection.query(sql, (err, results, fields) => {
		console.log(results);
		if(err) {
			console.log(err);
			callback(null, 'mysql error!');
		}else {
			if(validateDB(results[0], id, pw)) {
				console.log(results);
				callback(results[0]);
			}else {
				callback(null, 'validate error!');
			}
		}
	});

}

const validateDB = (data, id, pw) => {
	if(data.user_id === id && data.password === pw) {
		console.log("ok");
		return true;
	}else {
		return false;
	}
}