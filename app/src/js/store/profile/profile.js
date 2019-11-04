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
		getProfile: (ctx, data) => {
			return profileFuncs.getProfile(data.token)
				.then((res) => {
					ctx.commit('setProfile', res, {root: true})
				})
		}
	}
}