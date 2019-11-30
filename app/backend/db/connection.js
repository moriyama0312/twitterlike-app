const mysql = require('mysql2/promise');
const mysqlConnection = async () => {
	// DB定義
	const config = {
		host: 'localhost',
		user: 'root',
		password: 'tb0fm3Ku1ri2',
		database: 'twitter_db'
	};
	const connection = await mysql.createConnection(config);

	return connection;
}
export default mysqlConnection;