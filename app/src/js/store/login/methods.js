export default {
	getToken: (userInfo) => {
		return fetch('/user/token', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: userInfo
		})
		.then((res) => {
			if(res.ok) {
				return res.json()
			}
		})
	},
	getUserId: (token) => {
		return fetch('/user/id', {
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