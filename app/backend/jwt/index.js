import jwt from 'jsonwebtoken';

export default {
	encode: (userInfo) => {
		const payload = {
			sub: userInfo.id
		};
		const secret = 'secret_key_goes_here';
		const header = {
			algorithm : 'HS256'
		};
		
		const token = jwt.sign(payload, secret, header);

		return token;

	},
	decode: (token) => {
		const secret = 'secret_key_goes_here';
		return jwt.verify(token, secret, (err, decoded) => {
			if(err) {
				console.log("jwt error");
			}else {
				console.log(decoded);
				const id = {id: decoded.sub};
				return id;
			}
		}); 
	}
}