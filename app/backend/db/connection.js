const mysql = require('mysql');

// DB定義
const config = {
	host: 'localhost',
	user: 'root',
	password: 'tb0fm3Ku1ri2',
	database: 'twitter_db'
};

let connection = mysql.createConnection(config);

connection.connect((err) => {
	if(err) {
		console.log("error connection :" + err.stack);
		return;
	}
	console.log("connected as id" + connection.threadID);
});

export default connection;



