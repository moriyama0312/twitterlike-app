import * as ACTION_TYPE from './methods.js'
export default {
    namespaced: true,
    state: {

    },
    mutations: {

    },
    getters: {

    },
    actions: {
        login: (ctx, userInfo) => {
			if(userInfo.token === '') {
				return ACTION_TYPE.getToken(userInfo)
					.then((res) => {
						ctx.login({ token: res })
					})
			}else {
				return ACTION_TYPE.getUserId(userInfo.token)
					.then((res) => {
						ctx.commit('onLogin', res, { root: true })
					})
			}
        }
    }
}