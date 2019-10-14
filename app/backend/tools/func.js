export default {
	removeBearer: (auth) => {
		let resultToken = '';
        const str = 'Bearer ';

        if(token.indexOf(str) === 0) {
            resultToken = auth.replace(str, '');
        }

        return resultToken;
	}
}