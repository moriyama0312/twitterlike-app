import mysqlConnection from './connection';

export default async (userInfo) => {
	const connection = await mysqlConnection()
	const id = userInfo.id;
	const pw = userInfo.password;
	const sql = `SELECT *
				FROM user_info_test
				WHERE user_info_test.user_id = '${id}';`;

	const [row, fields] = await connection.execute(sql);
	if(validateDB(row[0], id, pw)) {
		return row[0];
	}else {
		return false;
	}
}

const validateDB = (data, id, pw) => {
	if(data.user_id === id && data.password === pw) {
		return true;
	}else {
		return false;
	}
}