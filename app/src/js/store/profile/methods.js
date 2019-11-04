export default {
	getProfile: (token) => {
		return fetch('/user/profile', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token
			}	
		})
		.then((res) => {
			if(res.ok) {
				return res.json()
			}
		})
	}
}