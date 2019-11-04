import profileFuncs from './methods'
export default {
	namespaced: true,
	state: {

	},
	mutations: {

	},
	getters: {

	},
	actions: {
		getProfile: (ctx, token) => {
			profileFuncs.getProfile(token)
		}
	}
}