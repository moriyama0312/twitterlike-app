import jwt from 'jsonwebtoken';

export default {
	encode: (id) => {
		const payload = {
			sub: id
		};
		const secret = 'secret_key_goes_here';
		const header = {
			algorithm : 'HS256'
		};
		
		const token = jwt.sign(payload, secret, header);

		return token;

	}
}