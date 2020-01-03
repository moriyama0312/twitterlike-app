import mysqlConnection from '../db/connection';
import sqlGenerator from '../sql/sqlGenerator';

export default async (data, maxId = -1) => {
	const connection = await mysqlConnection();
	const tweetId = data;
	const payload = {tweetId};
	let sql = sqlGenerator('GET_REPLY', payload);
	
	let [replyList, fields] = await connection.execute(sql);
	replyList = replyList.map((reply) => {
		reply.target_user_id = reply.target_user_id.split(', ');
		return reply;
	});
	console.log(replyList);
	const userIdList = [];
	replyList.forEach(element => {
		element.target_user_id.forEach(item => {
			if(userIdList.indexOf(item) === -1) userIdList.push(item);
		});
	});
	console.log(userIdList);
	return Promise.all(userIdList.map(async userId => {
		sql = sqlGenerator('GET_USER_INFO', {userId});
		let [row, f] = await connection.execute(sql);
		return row[0];
	})).then((res) => {
		return {replyList, userList: res};
	});
}